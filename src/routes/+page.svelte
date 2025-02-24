<script>
	import AnimatedGradientText from '$lib/components/AnimatedGradientText.svelte';
	import FlickeringGrid from '$lib/components/FlickeringGrid.svelte';
	import { cn } from '$lib/utils';
	import Marquee from '$lib/components/Marquee.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import BlurFade from '$lib/components/BlurFade.svelte';
	import GradualSpacing from '$lib/components/GradualSpacing.svelte';
	import LetterPullUp from '$lib/components/LetterPullUp.svelte';
	import GridPattern from '$lib/components/GridPattern.svelte';
	import GridBeam from "$lib/components/GridBeam.svelte";
	import BlurIn from '$lib/components/BlurIn.svelte';
	import Features from '$lib/components/Features.svelte';
	import BoxReveal from '$lib/components/BoxReveal.svelte';
	import BackgroundBoxesNew from '$lib/components/BackgroundBoxesNew.svelte';
	//import { variantPriorityOrder } from 'svelte-motion/types/render/utils/animation-state';
	const contacts = [
		{
			name: 'Oren Kaplan',
			username: '@Oren',
			body: 'Role',
			img: 'https://avatar.vercel.sh/jack'
		},
		{
			name: 'Walter Wong',
			username: '@Walter',
			body: 'Role',
			img: 'https://avatar.vercel.sh/jill'
		},
		{
			name: 'David Moon',
			username: '@David',
			body: 'Role',
			img: 'https://avatar.vercel.sh/john'
		},
		{
			name: 'Jiesen Zhang',
			username: '@Jiesen',
			body: 'Role',
			img: 'https://avatar.vercel.sh/jane'
		},
	];
	let data = [
    {
      id: 1,
      title: "Method 1: Random Walks for Long Range Communication",
      content:
        "Allow for better long range communication between important topologically distant node pairs.",
      image:
        "https://i.pinimg.com/736x/ca/aa/49/caaa49d386d84f2d037d0abcc919778f.jpg",
      //icon: PackageSearch,
    },
    {
      id: 2,
      title: "Method 2: Domain Based Partitioning",
      content:
        "Improve the current METIS based paritioning with domain based partitioning. ",
      image:
        "https://i.pinimg.com/736x/a5/dc/0a/a5dc0af50d185b7f9111949b17e17e1a.jpg",
      //icon: Settings,
    },
    {
      id: 3,
      title: "Method 3: ???",
      content:
        "???",
      image:
        "https://i.pinimg.com/736x/b1/b9/c2/b1b9c230143fb0d8540eabe5b74adf27.jpg",
      //icon: Eye,
    },
  ];
</script>





<div
	class="relative rounded-lg w-full mx-auto bg-background overflow-hidden flex items-center justify-center h-screen"
>
	<!-- alt colors: #6B7280 #1f60e0 #b36705-->
	<FlickeringGrid
		class="z-0 absolute inset-0 size-full"
		squareSize={4}
		gridGap={6}
		color="#1f60e0"
		maxOpacity={0.5}
		flickerChance={0.1}
		width={1920}
		height={1080}
	/>

	<div>
		<div class="z-10 flex items-center justify-center flex-col gap-6 text-2xl">
			<BlurIn
				class="font-geist text-center text-2xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] text-wrap"
				word="Improving GNN Architechture"
			/>
		</div>
		<div class="z-10 flex items-center justify-center flex-col gap-6 text-1xl">
			<BlurIn
				class="font-geist text-center text-2xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-4xl md:leading-[5rem] text-wrap"
				word="for Congestion Prediction in Chip Design"
			/>
		</div>
	</div>
</div>




<div class="flex gap-12 justify-center items-center" style="padding-bottom: 10%; padding-top: 5%;">
  <div
    style="padding-bottom: 100px; padding-top: 100px; padding-left: 7%;"
    class="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8"
  >
    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
      <p class="text-[3.5rem] font-semibold">
        Project Introduction<span class="text-[#3253dc]">.</span>
      </p>
    </BoxReveal>

    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
      <h2 class="mt-[.5rem] text-[1rem]">
        UCSD Data Science{" "}
        <span class="font-semibold text-[#3253dc]"> Capstone 2025</span>
      </h2>
    </BoxReveal>

	<BoxReveal boxColor={"#5046e6"} duration={0.5}>
		<div class="mt-[1.5rem]">
			<img src="https://dsc-capstone.org/2024-25/assets/images/hdsi-white.png" alt="HDSI Logo" class="w-1/2 h-1/2">
		</div>
	</BoxReveal>

    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
      <div class="mt-[1.5rem]">
        <p>
          Industry Partner and Mentorship from
          <span class="font-semibold text-[#3253dc]"> Qualcomm</span>
        </p>
      </div>
    </BoxReveal>
	
	<BoxReveal boxColor={"#5046e6"} duration={0.5}>
		<div class="mt-[1.5rem]">
			<img src="./qcom.png" alt="Qualcomm Logo" class="w-1/2 h-1/2">
		</div>
	</BoxReveal>
  </div>

  <div class="w-1/2 pt-[100px] pr-[5%]" style="padding-left: 5%;">
    <div class="h-[500px] w-[100%] overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-800 p-6" style="margin-left: 2.5%; background-color: #3253dc10;">
	  <h2 class="text-2xl font-semibold mb-4">Background & Motivation<span class="text-[#3253dc]">.</span></h2>
      <div class="prose dark:prose-invert">
        <p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula neque. Morbi vitae interdum justo. 

			Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget lobortis tellus, vitae blandit tortor. Maecenas hendrerit ante ut libero efficitur, ac dapibus dui interdum. Integer id placerat est, sed placerat nibh. Sed aliquam augue ac lectus hendrerit blandit. Mauris id massa consectetur, auctor nisl ut, rutrum urna. Duis sit amet odio blandit, finibus dui a, tincidunt sem. Donec ut tincidunt tellus. Pellentesque nec leo et tellus cursus eleifend. Fusce in iaculis sem. 
        </p>
        
        <h3 class="text-2xl font-semibold mb-4" style="padding-top: 20px;">Data Overview<span class="text-[#3253dc]">.</span></h3>
		
        <p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula neque. Morbi vitae interdum justo. 

			Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget lobortis tellus, vitae blandit tortor. Maecenas hendrerit ante ut libero efficitur, ac dapibus dui interdum. Integer id placerat est, sed placerat nibh. Sed aliquam augue ac lectus hendrerit blandit. Mauris id massa consectetur, auctor nisl ut, rutrum urna. Duis sit amet odio blandit, finibus dui a, tincidunt sem. Donec ut tincidunt tellus. Pellentesque nec leo et tellus cursus eleifend. Fusce in iaculis sem. 
        </p>

		<h3 class="text-2xl font-semibold mb-4" style="padding-top: 20px;">Key Objectives<span class="text-[#3253dc]">.</span></h3>
		
        <p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula neque. Morbi vitae interdum justo. 

			Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget lobortis tellus, vitae blandit tortor. Maecenas hendrerit ante ut libero efficitur, ac dapibus dui interdum. Integer id placerat est, sed placerat nibh. Sed aliquam augue ac lectus hendrerit blandit. Mauris id massa consectetur, auctor nisl ut, rutrum urna. Duis sit amet odio blandit, finibus dui a, tincidunt sem. Donec ut tincidunt tellus. Pellentesque nec leo et tellus cursus eleifend. Fusce in iaculis sem. 
        </p>

		<h3 class="text-2xl font-semibold mb-4" style="padding-top: 20px;">References & Acknowledgements<span class="text-[#3253dc]">.</span></h3>
		
        <p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula neque. Morbi vitae interdum justo. 

			Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget lobortis tellus, vitae blandit tortor. Maecenas hendrerit ante ut libero efficitur, ac dapibus dui interdum. Integer id placerat est, sed placerat nibh. Sed aliquam augue ac lectus hendrerit blandit. Mauris id massa consectetur, auctor nisl ut, rutrum urna. Duis sit amet odio blandit, finibus dui a, tincidunt sem. Donec ut tincidunt tellus. Pellentesque nec leo et tellus cursus eleifend. Fusce in iaculis sem. 
        </p>

      </div>
    </div>
  </div>
</div>

<GradualSpacing
  class="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-5xl md:leading-[5rem]"
  words="Methods Overview"
/>

<div class="flex justify-center items-center pr-[2.5%]">
	<Features {data} linePosition='left'/>
</div>




<div
	class="relative flex h-fit w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl"
>
	<div
	class="w-full h-[800px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]"
	>
	<GridBeam class="sm:pl-16 pt-28 pl-4 flex items-start justify-center">
	<div class="grid gap-2">
		<h1 class="sm:text-5xl text-4xl font-bold max-w-sm">
		Random Walks
		</h1>
		<p class="text-neutral-500 max-w-lg justify-center">
		Random Walks can ...
		</p>
	</div>
	</GridBeam>

	</div>

</div>

<!--
<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900 p-60"
>
	<div class="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]">
	</div>
	<BackgroundBoxesNew/>
	<h2 class={cn('relative z-20 text-xl text-white md:text-4xl')}>Graph Partitioning Methods</h2>
	<p class="relative z-20 mt-2 text-center text-neutral-300">
		Partitioning Chip Data for Congestion Prediction
	</p>
</div>
-->

<GradualSpacing
  class="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-5xl md:leading-[5rem]"
  words="Results & Conclusions"
/>



<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl"
>
	<Marquee pauseOnHover class="[--duration:20s]">
		
		{#each contacts as item}
			<ReviewCard {...item} />
		{/each}
	</Marquee>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-neutral-950"
	></div>
</div>
