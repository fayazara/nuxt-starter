<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 max-w-md mx-auto"
    @submit="onSubmit"
  >
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" class="w-full" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" class="w-full" />
    </UFormField>

    <UButton type="submit" :loading="loading"> Submit </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
});
const loading = ref(false);
type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  await sleep(2000);
  loading.value = false;
  toast.add({
    title: 'Success',
    description: 'The form has been submitted.',
    color: 'success',
  });
  console.log(event.data);
  loading.value = false;
}
</script>
