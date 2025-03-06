<template>
  <main>
    <UContainer>
      <div class="py-24 text-center space-y-4">
        <Logo class="w-10 h-10 mx-auto" />
        <h1 class="text-4xl sm:text-6xl font-bold font-display">
          Wakanda Forever
        </h1>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <div class="flex items-center justify-center gap-3">
          <UButton
            label="Get Started"
            size="xl"
            color="primary"
            class="rounded-2xl"
          />
          <ThemeToggle />
        </div>
      </div>
      <FormExample />
    </UContainer>
  </main>
</template>
