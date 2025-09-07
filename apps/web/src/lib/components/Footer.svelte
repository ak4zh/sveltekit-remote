<script lang="ts">
  import { ChevronsDown } from "@lucide/svelte";
  import { Separator } from "$lib/components/ui/separator";
	import { siteConfig } from "$lib/config/meta";
</script>

<footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
  <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
      <div class="col-span-full xl:col-span-2">
        <a href="/" class="flex font-bold items-center">
          <ChevronsDown class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
          <h3 class="text-2xl">{siteConfig.name}</h3>
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Contact</h3>
        <div><a href="https://github.com" class="opacity-60 hover:opacity-100">Github</a></div>
        <div><a href="https://twitter.com" class="opacity-60 hover:opacity-100">Twitter</a></div>
        <div><a href="https://instagram.com" class="opacity-60 hover:opacity-100">Instagram</a></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Platforms</h3>
        <div><span class="opacity-60 hover:opacity-100 cursor-default">iOS</span></div>
        <div><span class="opacity-60 hover:opacity-100 cursor-default">Android</span></div>
        <div><span class="opacity-60 hover:opacity-100 cursor-default">Web</span></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Help</h3>
        <div><a href="#contact" class="opacity-60 hover:opacity-100">Contact Us</a></div>
        <div><a href="#faq" class="opacity-60 hover:opacity-100">FAQ</a></div>
        <div><a href="#contact" class="opacity-60 hover:opacity-100">Feedback</a></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Socials</h3>
        <div><a href="https://twitch.tv" class="opacity-60 hover:opacity-100">Twitch</a></div>
        <div><a href="https://discord.com" class="opacity-60 hover:opacity-100">Discord</a></div>
        <div><a href="https://dribbble.com" class="opacity-60 hover:opacity-100">Dribbble</a></div>
      </div>
    </div>

    <Separator class="my-6" />
    
    <section>
      <h3>
        &copy; 2024 All rights reserved
      </h3>
    </section>
  </div>
</footer>