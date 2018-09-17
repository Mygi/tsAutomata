# tsAutomata
Some thought on Tiling and automata on the web

## Concept
I had an interview the other day where I was asked to write a tiling function for the web. In the heat of the moment, I came up with a rudementary solution. After leaving the interview, I started to think how I would ideally implement the solution. As I dug deeper, the problem became more and more interesting. So I created an angular project to test out a couple of ideas.

## Spec
1. Part 1 of the problem is to build a system which outputs a set of tiles of alternating colours (A chess board) basically. The tiles can be any dimension and have any number of rows and columns of tiles.
2. Part 2 is to take the onClick event from any tile and to paint that whole tile in some colour or another.

## Considerations.
So this problem is not new and there are a bunch of algorithms to optimise the solution. Typically, rasterisation often makes using of tiling for generating bitmaps and as such a lot of tiling software is built into the hardware and optimised for rendering sections of a canvas in parallel. One such example was the PowerVR rasterising engine that Sony used on its DreamCast console in 1996, in this case it used 32x32 tiles for the conversion of vector-based polygons. In 2006, Glazier and Chen used checkerboarding for distributing Cellular Potts Models via the Message Passing Interfacee (MPI), demonstrating a means to rendering of billions of cellular ~tiled objects over several distributed systems [1]

However, in javascript, you don't have access to parts of the computer hardware that you do in other languages like c++. That means that performance will not be optimised in the same way as many high performance tiling algorithms. Additionally, your access to the graphics card rendering will be mostly determined by the browser.  SThe same goes for memory allocation and consumption which will be optimised differently depending on the browser (for instance, Chrome is typically a memory intensive browser, sacrificing on memory to boilster performance). 

So I wondered how performance of tiling would be affected by various layers of abstraction on the browser. As I write in Angular, I was especially curious how the Angular compiler would optimise my code for production. 

## Solutions
This project started to grow as I thought of different potential optimisations. I am now migrating all my solutions into a single project. 

The variables that I could change for each solution would include:
1. Html Rendering ( svg vs canvas vs html element )
2. Data Model (Object Array, 2D Array, 1D strided Array, HTML5 Byte based arrays like Int32Array)
3. System Design ( modular with separation of concerns and dependency injection, flattened component, flat javascript)
4. 2D rendering Libraries ([pixijs](http://www.pixijs.com/), [twojs](https://two.js.org/), [snap svg](http://snapsvg.io/) and [paperjs](http://paperjs.org/examples/q-bertify/) )
5. Browser ( Firefox vs Chrome as not all features of this test are supported by other browsers, plus developer tools provide better access to memory interrogation)
6. As a final test - I want to be able to test the same code between js frameworks (especially React vs Angular vs Vue) - but this is a nice-to-have at this stage.
7. Shape Of Tiling Canvas (I suspect that squares will work better than rectangles in some cases). Also a nice-to-have at this stage.


## Testing
There are several metrics we can pick up from these tests. The most interesting for me are:
1. Total Tiles (before crashing the browser in a conistent environment)
2. Total Pixels Covered (before crashing the browser in a conistent environment)

Of course, the more analytical approach would be to look at specifica changes in memory consumption, especially to:
1. Objects
2. Array
3. Total Memory Delta
NB: This is possible through inspections with the browser devTools in Firefox and Chrome. Hopefully, after repeated experiments - results should be consistent.

## Early Results
All code from this repository is published here: http://ts-automata.s3-website-ap-southeast-2.amazonaws.com/native-element

1. No surprises that canvas is the fastest renderer as access to webGl gives better throughput to the Graphics Card. However, this is better by an order of magnitude. Currently SVG runs second best, dropping out around the 100,000 tiles mark. Canvas is slowing down around the 1million mark but still rendering. This is before any optimsations to the data model.

## References
1. Chen N., Glazier J.A., Alber M.S. (2006) A Parallel Implementation of the Cellular Potts Model for Simulation of Cell-Based Morphogenesis. In: El Yacoubi S., Chopard B., Bandini S. (eds) Cellular Automata. ACRI 2006. Lecture Notes in Computer Science, vol 4173. Springer, Berlin, Heidelberg
