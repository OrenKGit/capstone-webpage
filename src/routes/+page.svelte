<script>
	import AnimatedGradientText from '$lib/components/AnimatedGradientText.svelte';
	import AnimatedUniBeam from '$lib/components/AnimatedUniBeam.svelte';
	import Circle from '$lib/components/Circle.svelte';
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
      title: "Connecting Physically Close Nodes with Random Walks",
      content:
        "Directly connect topologically distant but physically close node pairs with validated random walks.",
      image: "https://cdn-images-1.medium.com/max/960/1*heR0By4G5GbpJ6ZaftJLRQ.gif",
    },
    {
      id: 2,
      title: "Approximating Physical Partitions with K-Means Node Feature Clustering",
      content:
        "Add important physical information to the graph by approximating placement based partitions.",
      image: "https://i.pinimg.com/736x/1b/9f/c9/1b9fc917016085805a43b4e623fdefd0.jpg",
      //icon: Settings,
    },
    {
      id: 3,
      title: "Community Based Partitioning with Louvain Algorithm",
      content:
        "Create meaningful partitions of the graph based on the community structure of the graph.",
      image:
        "https://i.pinimg.com/736x/be/c8/5c/bec85c7ff82948be479d49d3e8f5018b.jpg",
    },
    ];
	let containerRef;
	let div1Ref;
	let div2Ref;
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
				word="Improving GNN Architecture"
			/>
		</div>
		<div class="z-10 flex items-center justify-center flex-col gap-6 text-1xl">
			<BlurIn
				word="For Congestion Prediction"
			/>
		</div>
		<div class="z-10 flex items-center justify-center flex-col gap-6 text-1xl">
			<BlurIn
				word="In Chip Design"
			/>
		</div>
	</div>
</div>




<div class="flex flex-wrap gap-12 justify-center items-center" style="padding: 5% 5%;">
  <div
    style="padding: 5%;"
    class="h-full w-full md:w-1/2 max-w-[32rem] items-center justify-center overflow-hidden pt-8"
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

	<BoxReveal boxColor={"#5046e6"} duration={0.5}>
		<div class="mt-[1.5rem]">
		  <p>
			Checkout our GitHub repository and Paper!
		  </p>
		</div>
	</BoxReveal>
	
	<BoxReveal boxColor={"#5046e6"} duration={0.5}>
		<div class="mt-[1.5rem] flex justify-center items-center gap-4">
			<a href="https://github.com/waltercywong/Congestion-Prediction-in-Chip-Design-with-Walks-and-Paritioning">
				<img src="./github-mark-white.svg" alt="GitHub Logo" class="w-12 h-12">
			</a>
			<a href="https://github.com/another-repo-link">
				<img src="./doc_icon.svg" alt="Document Icon" class="w-12 h-12">
			</a>
		</div>
	</BoxReveal>

  </div>

  <!-- Embed YouTube Video -->
  <div class="w-full md:w-1/2 pt-[100px] pr-[5%]" style="padding: 5%;">
    <div class="h-[300px]">
	  
      <iframe
        class="w-full h-full rounded-lg border border-gray-200 dark:border-gray-800"
        src="https://www.youtube.com/embed/IkRXpFIRUl4?autoplay=1&mute=1&loop=1&playlist=IkRXpFIRUl4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>





<div class="w-full pt-[50px] flex justify-center items-center" style="padding: 5%;">
  <div class="h-[500px] w-full max-w-6xl overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-800 p-6 mx-auto" style="background-color: #3253dc10;">
    <div class="space-y-8">
      <!-- First Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="pr-4">
          <h2 class="text-3xl font-semibold mb-4">Background & Motivation<span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">.</span></h2>
		  <h3 class="text-2xl mb-4"><span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Predicting Congestion Early in the Design Process</span></h3>   
		  <div class="prose dark:prose-invert">
            <p>
              Chip design has increased exponentially in terms of complexity, leading to significant challenges in predicting and reducing wire congestion.
              <br>
              <br>
              Congestion describes areas with excess wire routing density and power demand, which negatively impacts performance through overheating and signal interference.
              Many SOTA Graph ML techniques are less effective at dealing with chip layouts due to their connectivity structure. 
              <br>
              <br>
              The existing DE-HNN (Luo, 2024) model aims to address the lack of generalizability in chip graph representations.
			  <br>
			  <br>
			  Predicting and mitigating congestion early in the chip design process, before the lengthy placement and routing process, could revolutionize the field; saving time, resources, and improving chip efficiency.
			  <br>
			  <br>
			  We aim to enhance the graph representation of the chips to better predict congestion problem areas.
			</p>
          </div>
        </div>
        <div class="flex items-center justify-center pl-4">
          <img src="./congestion_example.png" alt="Description of image">
        </div>
      </div>
      <!-- Divider -->
      <div class="w-full h-0.5 bg-neutral-300/50 dark:bg-neutral-300/30"></div>


      <!-- Second Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="pr-4">
          <h2 class="text-3xl font-semibold mb-4">Data Overview<span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">.</span></h2>
		  <h3 class="text-2xl mb-4"><span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Representing Chip Design as a Hypergraph</span></h3>   
		  <div class="prose dark:prose-invert">
            <p>
			  Dataset comprises of 12 Superblue circuit designs from (Viswanathan, 2012)
              <br>
			  <br>
			  Each design has its logic (figure 2) formatted into a netlist (figure 3) containing Cells and Nets.
			  <br>
			  <br>
			  Each design's netlist contains around 1.3M cells and 400K nets.              
			  <br>
			  <br>
			  DE-HNN model processes netlists into directed hypergraph representations, with cells as nodes while nets are directed hyperedges.<br>
              <br>
			  Node features include physical cell features (size, cell type) and topological features (Laplacian eigenvectors, Persistence Diagrams, and neighborhood degree distrs.).			</p>
          </div>
        </div>
        <div class="flex items-center justify-center pl-4">
			<img src="./data_diagram.svg" alt="Description of image">
        </div>
      </div>
	  <!-- Divider -->
      <div class="w-full h-0.5 bg-neutral-300/50 dark:bg-neutral-300/30"></div>


      <!-- 3rd Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="pr-4">
          <h2 class="text-3xl font-semibold mb-4">Model Overview and Limitations<span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">.</span></h2>
		  <h3 class="text-2xl mb-4"><span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Representing Chip Design as a Hypergraph</span></h3>   
		  <div class="prose dark:prose-invert">
            <p>
				The existing DE-HNN model architecture comprises of 3 Hypergraph Convolutional Layers with ReLU activation functions to predict node demand.              <br>
              <br>
              The DE-HNN graph representation uses virtual nodes to aggregate graph partitions generated by METIS to enhance long-range message passing, which is a common problem in GNNs.<br>
              <br>
			  However, the current implementation has limitations in accurately capturing specific long-range dependencies, especially for  nodes impacting congestion but are not well-represented within the existing partitions.            </p>
              <br>
			  Additionally, the existing model does not directly address the address the gap between the topological and physical representation.
			</div>
        </div>
        <div class="flex items-center justify-center pl-4">
          <img src="./qcom.png" alt="Description of image">
        </div>
      </div>
	  <!-- Divider -->
      <div class="w-full h-0.5 bg-neutral-300/50 dark:bg-neutral-300/30"></div>


      <!-- 4th Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="pr-4">
          <h2 class="text-3xl font-semibold mb-4">Data Overview<span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">.</span></h2>
		  <h3 class="text-2xl mb-4"><span class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Representing Chip Design as a Hypergraph</span></h3>   
		  <div class="prose dark:prose-invert">
            <p>
              Chip design has increased exponentially in terms of complexity, leading to significant challenges in predicting and reducing wire congestion.
              <br>
              <br>
              Congestion describes areas with excess wire routing density and power demand, which negatively impacts performance through overheating and signal interference.
              Many SOTA Graph ML techniques are less effective at dealing with chip layouts due to their connectivity structure. 
              <br>
              <br>
              The existing DE-HNN (Luo, 2024) model aims to address the lack of generalizability in chip graph representations.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center pl-4">
          <img src="./qcom.png" alt="Description of image">
        </div>
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