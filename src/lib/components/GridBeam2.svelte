<script lang="ts">
  import { cn } from "$lib/utils";
  import { M, Motion } from "svelte-motion";

  let className: any = "";
  export { className as class };
</script>

<div class={cn("relative w-full h-full", className)}>
  <!-- First Beam, inverted and with swapped colors -->
  <svg
    width="156"
    height="63"
    viewBox="0 0 156 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute bottom-0 left-0 ml-24 mb-8"
  >
    <path
      d="M31 62.5h32M0 62.5h32m30-31h32m-1 0h32m-1-31h32M62.5 31V63m62-63V32"
      stroke="url(#grad1)"
      stroke-width={1.5}
    />
    <defs>
      <Motion
        variants={{
          initial: {
            x1: "40%",
            x2: "50%",
            x3: "60%",
            x4: "70%",
            x5: "80%",
            y1: "160%",
            y2: "180%",
            y3: "200%",
            y4: "220%",
            y5: "240%",
          },
          animate: {
            x1: "0%",
            x2: "10%",
            x3: "20%",
            x4: "30%",
            x5: "40%",
            y1: "-40%",
            y2: "-20%",
            y3: "-10%",
            y4: "0%",
            y5: "10%",
          },
        }}
        animate="animate"
        initial="initial"
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 1,
        }}
        isSVG={true}
        let:motion
      >
        <linearGradient id="grad1" use:motion>
          <stop stop-color="#FF5733" stop-opacity="0" />
          <stop stop-color="#FF5733" />
          <stop offset="0.325" stop-color="#FFC300" />
          <stop offset="1" stop-color="#DAF7A6" stop-opacity="0" />
        </linearGradient>
      </Motion>
    </defs>
  </svg>

  <!-- Second Beam, inverted and with swapped colors -->
  <svg
    width="156"
    height="63"
    viewBox="0 0 156 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute bottom-0 right-0 mr-24 mb-8"
  >
    <path
      d="M31 62.5h32M0 62.5h32m30-31h32m-1 0h32m-1-31h32M62.5 31V63m62-63V32"
      stroke="url(#grad2)"
      stroke-width={1.5}
    />
    <defs>
      <Motion
        variants={{
          initial: {
            x1: "20%",
            x2: "30%",
            x3: "40%",
            x4: "50%",
            x5: "60%",
            y1: "-20%",
            y2: "0%",
            y3: "10%",
            y4: "20%",
            y5: "30%",
          },
          animate: {
            x1: "60%",
            x2: "70%",
            x3: "80%",
            x4: "90%",
            x5: "100%",
            y1: "180%",
            y2: "200%",
            y3: "220%",
            y4: "240%",
            y5: "260%",
          },
        }}
        animate="animate"
        initial="initial"
        transition={{
          duration: 2.0,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          repeatDelay: 2,
        }}
        isSVG={true}
        let:motion
      >
        <linearGradient id="grad2" use:motion>
          <stop stop-color="#18CCFC" stop-opacity="0" />
          <stop stop-color="#18CCFC" />
          <stop offset="0.325" stop-color="#6344F5" />
          <stop offset="1" stop-color="#AE48FF" stop-opacity="0" />
        </linearGradient>
      </Motion>
    </defs>
  </svg>

  <slot></slot>
</div> 