export default function Footer(){
    const year = new Date().getFullYear();

    return (
        <div className= "bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-500 ">
        <footer>
            <p className="text-center">
                Copyright@ JRD Tech {year}
            </p>
        </footer>
        </div>
    );
}