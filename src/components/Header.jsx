import '../globalStyles.css'



export function Header() {


    return (
        <div className='header-container'>
            <div className='searcher ' id='searcher'>
                <i class="bi bi-search"></i>
                <input className='input-searcher' type="text" />
            </div>
            <h1 className='title-header'>Frevshually</h1>
            <img className='user-img' src="https://cdn-icons-png.flaticon.com/512/1251/1251572.png?w=740&t=st=1664330883~exp=1664331483~hmac=9bf00834d502334ae451101d944c53b488e8a51ba3cfc5428c52e42c560b7b92" alt="user_img" />
             
        </div>
    )

    


}

    
function searcherFocus() {
    const input = document.querySelector('.input-searcher');
    const searcher = document.querySelector('.searcher');

    input.addEventListener("focus", () => {
        searcher.classList.add("searcher-expand")
    })

    input.addEventListener("blur", () => {
        searcher.classList.remove("searcher-expand")
    })
}
    





