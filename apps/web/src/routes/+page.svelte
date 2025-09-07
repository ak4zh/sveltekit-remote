<script>
	import { deleteAll, deleteUser, getUsers, insertUser } from './data.remote';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import Hero from '$lib/assets/hero.webp';
  import * as Select from "$lib/components/ui/select/index.js";

</script>
<div class="relative -mt-32 z-20">
  <!-- Hero Card -->
  <Card class="relative h-[32rem] overflow-hidden rounded-2xl border-0 shadow-lg">
    <!-- Background image -->
    <img
      src={Hero}
      alt="Happy woman in car"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

    <!-- Content -->
    <CardContent class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
      <CardTitle class="text-4xl md:text-5xl font-bold mb-4 leading-tight text-balance">
        Een nieuwe zakelijke <br />
        leaseauto wacht op je
      </CardTitle>
      <CardDescription class="text-lg md:text-xl font-medium text-orange-400">
        Jouw perfecte match in minuten
      </CardDescription>
    </CardContent>
  </Card>

  <!-- Floating Search Form -->
  <div class="container -mt-32 z-20 md:mb-16 mb-8 max-w-5xl">
    <div class="bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <!-- Merk -->
      <div class="flex-1">
        <label for="brand" class="text-sm text-white/80 block mb-1">Merk</label>
        <Select.Root type="single" name="brand">
          <Select.Trigger class="w-full bg-white text-black rounded-md">
            Selecteer Merk
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="audi">Audi</Select.Item>
            <Select.Item value="bmw">BMW</Select.Item>
            <Select.Item value="tesla">Tesla</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <!-- Model -->
      <div class="flex-1">
        <label for="model" class="text-sm text-white/80 block mb-1">Model</label>
        <Select.Root type="single" name="model">
          <Select.Trigger class="w-full bg-white text-black rounded-md">
            Selecteer Model
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="a3">A3</Select.Item>
            <Select.Item value="x5">X5</Select.Item>
            <Select.Item value="model3">Model 3</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <!-- Budget -->
      <div class="flex-1">
        <label for="price" class="text-sm text-white/80 block mb-1">Lease budget</label>
        <Select.Root type="single" name="price">
          <Select.Trigger class="w-full bg-white text-black rounded-md">
            -
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="500">&lt; €500</Select.Item>
            <Select.Item value="1000">&lt; €1000</Select.Item>
            <Select.Item value="2000">&lt; €2000</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <!-- CTA -->
      <div class="flex-shrink-0">
        <Button size="lg" class="bg-orange-500 hover:bg-orange-600 text-white rounded-xl mx-auto">
          Bekijk 134.959 Lease deals
        </Button>
      </div>
    </div>
  </div>
</div>
