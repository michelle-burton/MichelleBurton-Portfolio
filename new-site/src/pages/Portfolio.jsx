function Portfolio() {
    return (
        <main className="page-container">
            <h1>Portfolio</h1>

    <section class="featured-designs">
        <h2 class="portfolio">Featured Designs</h2>
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="design-item" data-category="code">
                        <div class="col">
                        <a href="https://stock-tracker-2tc9.onrender.com/Total%20Return%20Tracker/index.html" target="_blank"><img src="/img/Thumb_09.png" alt="Stock Tracker"/></a>
                        <div class="overlay"><a href="https://stock-tracker-2tc9.onrender.com/Total%20Return%20Tracker/index.html" target="_blank">View Design</a></div>
                    </div>
                    </div> 
                </div>
                <div class="col">
                    <div class="card design-item" data-category="illustrations">
                       <a href="design/index.html?id=1"><img src="images/Thumb_01.png" class="img-fluid" alt="Illustration"/></a>
                        <div class="overlay"><a href="design/index.html?id=1">View Design</a></div>
                    </div>
                </div>
          
                <div class="col">
                    <div class="card design-item" data-category="ui-kits">
                    <a href="design/index.html?id=5"><img src="images/Thumb_05.png" class="img-fluid" alt="UI Kit"/></a>
                    <div class="overlay"><a href="design/index.html?id=5">View Design</a></div>
                    </div>
                </div>
                <div class="col">
                <div class="card design-item" data-category="code">
                    <a href="https://puppy-palace-react-app.onrender.com/" target="_blank"><img src="images/Thumb_10.png" alt="Puppy Palace"/></a>
                    <div class="overlay"><a href="https://puppy-palace-react-app.onrender.com/" target="_blank">View Design</a></div>
                    </div>
                </div>
                <div class="col">
                <div class="card design-item" data-category="code">
                    <a href="dog-viewer/index.html"><img src="/img/Thumb_08.png" class="img-fluid" alt="Dog Viewer API"/></a>
                    <div class="overlay"><a href="dog-viewer/index.html">View Design</a></div>
                    </div>
                </div>
          
                 <div class="col">
                    <div class="design-item" data-category="illustrations">
                        <a href="design/index.html?id=3"><img src="/img/Thumb_03.png" alt="Creative Illustration"/></a>
                        <div class="overlay"><a href="design/index.html?id=3">View Design</a></div>
                    </div>
                </div>
                 <div class="col">
                    <div class="design-item" data-category="ui-kits">  
                    <a href="design/index.html?id=6"><img src="/img/Thumb_06.png" alt="Mobile UI Kit"/></a>
                    <div class="overlay"><a href="design/index.html?id=6">View Design</a></div>
                    </div>
                </div>
                 <div class="col">
                    <div class="card design-item"  data-category="code">
                            <a href="code-task-list/index.html"><img src="/img/Thumb_07.png" class="img-fluid" alt="Code Project"/></a>
                            <div class="overlay"><a href="code-task-list/index.html">View Feature</a></div>
                    </div>
                </div>
                <div class="col">
                    <div class="card design-item"  data-category="illustrations">
                            <a href="design/index.html?id=4"><img src="/img/Thumb_04.png" class="img-fluid" alt="Illustration"/></a>
                            <div class="overlay"><a href="design/index.html?id=4">View Feature</a></div>
                    </div>
                </div>
            </div>
        
            </div>

        </section>
        </main>
    )
}

export default Portfolio;