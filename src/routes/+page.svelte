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
			username: 'orenkaplan02@gmail.com',
			body: 'Front End & Partitioning',
			img: 'https://media.licdn.com/dms/image/v2/D5603AQHecv6saUQnfQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719354298954?e=1747267200&v=beta&t=v0yN9UL2DqYZjzpyEl8ShAV2trWDpkX1v8LnxH1TCNU'
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
  <div class="h-[700px] w-full max-w-6xl overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-800 p-6 mx-auto" style="background-color: #3253dc10;">
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
              The existing <a href='https://arxiv.org/abs/2404.00477' class='text-blue-500 hover:text-blue-700'>DE-HNN (Luo, 2024)</a> model aims to address the lack of generalizability in chip graph representations.
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
			  Node features include physical cell features (size, cell type) and topological features (Laplacian eigenvectors, Persistence Diagrams, and neighborhood degree distrs.).
			</p>
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
			  The existing DE-HNN model architecture comprises of 3 Hypergraph Convolutional Layers with ReLU activation functions to predict node demand.<br>
              <br>
              The DE-HNN graph representation uses virtual nodes to aggregate graph partitions generated by METIS to enhance long-range message passing, which is a common problem in GNNs.<br>
              <br>
			  However, the current implementation has limitations in accurately capturing specific long-range dependencies, especially for nodes impacting congestion but are not well-represented within the existing partitions.<br>
              <br>
			  Additionally, the existing model does not directly address the gap between the topological and physical representation.
			  <br>
			  <br>
			  We aim to address these limitations by introducing a new model that can better capture the long-range dependencies and close the gap between the topological and physical representation.
			</div>
        </div>
        <div class="flex flex-col items-center justify-center pl-4">
	      <img src="./layers_diagram.png" alt="Layers Diagram">
          <img src="./model_diagram.png" alt="Model Diagram">
        </div>
      </div>
    </div>
  </div>
</div>

<GradualSpacing
  class="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-5xl md:leading-[5rem]"
  words="Methods Overview"
/>

<div class="flex justify-center items-center pr-[2.5%] pl-[2.5%]">
	<Features {data} linePosition='left'/>
</div>
<GridBeam class="sm:pl-16 pt-28 pl-4 flex items-center">
</GridBeam>
<div 
class="relative flex h-fit w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20"
>
		<div class="grid gap-2 max-w-2xl mx-auto">
			<h1 class="sm:text-5xl text-4xl font-bold text-left">
				Random Walks
			</h1>
			<p class="text-neutral-500 text-left">
				<br>
				Random Walks can ...
				<br>
				<br>
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
				Node features include physical cell features (size, cell type) and topological features (Laplacian eigenvectors, Persistence Diagrams, and neighborhood degree distrs.).
			</p>
		</div>
</div>

<div 
class="relative flex h-fit w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20"
>
	<div class="grid gap-2 max-w-2xl mx-auto">
		<h1 class="sm:text-5xl text-4xl font-bold text-left">
			Virtual Node Partitioning
		</h1>
		<p class="text-neutral-500 text-left">
			<br>
			Random Walks can ...
			<br>
			<br>
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
			Node features include physical cell features (size, cell type) and topological features (Laplacian eigenvectors, Persistence Diagrams, and neighborhood degree distrs.).
		</p>
	</div>
	
	<GridPattern
		squares={[
			[4, 4],
			[5, 1],
			[8, 2],
			[6, 6],
			[10, 5],
			[13, 3],
		]}
		class={cn(
			"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
			"h-[100%] w-[100%] skew-y-100"
		)}
		fillColor="rgb(156 163 175 / .3)"
	>
	
	</GridPattern>
	
</div>
<!--"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",-->

<GradualSpacing
  class="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-5xl md:leading-[5rem]"
  words="Results & Conclusions"
/>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20"
>
	<Marquee pauseOnHover class="[--duration:20s]">
			<div class="py-8 px-8 max-w-screen-xl text-center">
				<div class="w-full grid gap-14 grid-cols-4">
					<div class="bg-gray-800 hover:bg-gray-700 shadow-xl py-4 rounded-lg text-center text-white w-64">
						<img class="shadow-xl mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://media.licdn.com/dms/image/v2/C5603AQGQoKzNEAJ5oA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1631080937138?e=1747267200&v=beta&t=0MvAQ3ghMrnmi7Qvr2kCwbCJLu4pDiKotsF3bLJcBcM" alt="Bonnie Avatar">
						<h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
							<a href="">Walter Wong</a>
						</h3>
						<p>Walks / Data Analysis</p>
						<ul class="flex justify-center mt-4 space-x-4">
							<li>
								<a href="https://www.linkedin.com/in/walter-wong-078b6a1b2/" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
									<svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
										<path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
										<path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
									  </svg>  
										
								</a>
							</li>
							<li>
								<a href="https://github.com/waltercywong" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
									<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
								</a>
							</li>
						</ul>
					</div>
					<div class="bg-gray-800 hover:bg-gray-700 shadow-xl py-4 rounded-lg text-center text-white w-64">
						<img class="shadow-xl mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://media.licdn.com/dms/image/v2/D5603AQHecv6saUQnfQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719354298954?e=1747267200&v=beta&t=v0yN9UL2DqYZjzpyEl8ShAV2trWDpkX1v8LnxH1TCNU" alt="Helene Avatar">
						<h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
							<a href="#">Oren Kaplan</a>
						</h3>
						<p class="text-sm">Front-end / Partitioning</p>
						<ul class="flex justify-center mt-4 space-x-4">
							<li>
								<a href="https://www.linkedin.com/in/oren-kaplan-8380b1231/?trk=opento_sprofile_details" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
									<svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
										<path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
										<path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
									  </svg>   
								</a>
							</li>
							<li>
								<a href="https://github.com/OrenKGit" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
									<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
								</a>
							</li>
						</ul>
					</div>
					<div class="bg-gray-800 hover:bg-gray-700 shadow-xl py-4 rounded-lg text-center text-white w-64">
						<img class="shadow-xl object-cover mx-auto mb-4 w-36 h-36 rounded-full" src="james.png" alt="Jese Avatar">
						<h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
							<a href="#">David Moon</a>
						</h3>
						<p>Model Pipeline</p>
						<ul class="flex justify-center mt-4 space-x-4">
							<li>
								<a href="https://github.com/D2jc" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
									<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
								</a>
							</li>
						</ul>
					</div>
					<div class="bg-gray-800 hover:bg-gray-700 shadow-xl py-4 rounded-lg text-center text-white w-64">
						<img class="shadow-xl mx-auto mb-4 w-36 h-36 rounded-full object-cover" src="https://media.licdn.com/dms/image/v2/D5603AQGmnCLBtKv23Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704825678388?e=1747267200&v=beta&t=3nFbNACjjWvCOB0ZuKLY58IkuLcIIoHjCmQ29pLEJrQ" alt="Joseph Avatar">
						<h3 class="mb-1 text-2xl font-bold tracking-tight text-white">
							<a href="#">Jiesen Zhang</a>
						</h3>
						<p>Partitioning</p>
						<ul class="flex justify-center mt-4 space-x-4">
							<li>
								<a href="https://www.linkedin.com/in/jiesen-zhang/" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
									<svg class="w-6 h-6 text-[#0077B5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
										<path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
										<path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
									  </svg>  
										
								</a>
							</li>
							<li>
								<a href="https://github.com/DILING69" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
									<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
								</a>
							</li>
						</ul>
					</div>
				</div>  
			</div>
	</Marquee>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-neutral-950"
	></div>
</div>
