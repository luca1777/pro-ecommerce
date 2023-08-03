export default function HomePage (){




    return (<div>
        <header>

            <nav className={"flex justify-between p-48"}>
                <a href={"/"}>1</a>
                <a href={"/"}>2</a>
                <a href={"/"}>3</a>
                <a href={"/"}>4</a>
            </nav>
            {/*<img src={"https://picsum.photos/1200/600"} className={"w-full bg-repeat-no"}  />*/}
            <div className={""} style={{
                backgroundImage: "url('https://picsum.photos/100/240')",
                height: "100px",
                backgroundRepeat:"no-repeat",
                backgroundColor:"red"
            }}>

            </div>
        </header>
        <main>

            <div>
                <img />
                <p></p>

            </div>
        </main>
        <footer>

        </footer>
    </div>)
}


