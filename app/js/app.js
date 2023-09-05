// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'


document.addEventListener('DOMContentLoaded', () => {



    ///headerNav///

    const burgerButton = document.querySelector('.burger')
    const menu= document.querySelector('.burger_menu')
    const menuButtons = document.querySelectorAll('.burger_button')
    const headerNav = document.querySelectorAll('.header_link')
    const searchInput= document.querySelector('.search-input')
    const burgerIcon= document.querySelector('.burger_image')
    const burgerCloseIcon = document.querySelector('.burger_image-plus')

    const defaultState = ()=>{
        // menuButtons[0].classList.add('active-li')
        headerNav[0].classList.add('active-link')
    }

    ///headerNav///



    ///burgerMenu///
    const menuWord = document.querySelector('.menu-word')
    const openBurger =()=>{
        menu.classList.toggle('burger_active')
        if(menu.classList.contains('burger_active')){
            burgerCloseIcon.style.display='block'
            burgerIcon.style.display='none'

        }else{
            burgerCloseIcon.style.display='none'
            burgerIcon.style.display='block'
        }

    }
    //Выбрать ссылку в бургере
    burgerButton.addEventListener('click', openBurger)

    for (let menuButton of menuButtons){


        const selectBurgerLink = (e)=> {
            let state = e.target.innerHTML

            e.stopPropagation()

        }



    }

    ///burgerMenu///

    //headerInput//
    const menuSearch = document.querySelector('.menu-search')
    const searchResult= document.getElementById('search-result')
    const searchInputClose= document.querySelector('.search-input_close-icon')
    const headerForm = document.getElementById('form-header')
    const menuSearchButton = document.querySelector('.menu-search')


    // события на фокус
    searchInput.addEventListener('focus', ()=>{
        burgerIcon.style.display='none'
        burgerCloseIcon.style.display='block'
        menuSearch.style.display='none'
        menuWord.style.display='none'
        langBlock.style.display='none'
    })

    main.addEventListener('click', ()=>{
        searchResult.style.display='none'
    })

    // события на блур
    searchInput.addEventListener('blur', ()=>{
        menuSearch.style.display='block'
        menuWord.style.display='block'
        burgerIcon.style.display='block'
        burgerCloseIcon.style.display='none'
        langBlock.style.display='flex'


        searchInputClose.classList.remove('active_close-icon')
        searchInput.value=''
    })
    headerForm.addEventListener('click', (e)=>e.stopPropagation())
    // открыть окно с результатами поиска
    const openResult = (e) =>{
        e.preventDefault()
        searchInputClose.classList.add('active_close-icon')
        if (searchInput.value.length>0){
            searchResult.style.display='block'
        }else {
            // searchResult.style.display='none'
        }
    }

    const openSeacrchInput =()=>{

    }


    searchInput.addEventListener('input',  openResult)
    searchInputClose.addEventListener('click', (e)=>{
        e.stopPropagation()
        searchInput.value=''
    })
    menuSearchButton.addEventListener('click', ()=>{
        searchInput.focus()
    })
    //headerInput//



    //popup//
    const popupRegClose= document.getElementById('popup_reg-close')
    const popupReg = document.querySelector('.popup_reg')
    const selectArrow= document.querySelector('.arrow-select')
    const searchSelectBlock= document.getElementById('select-input_result')
    const selectResult = document.querySelectorAll('.select-result')
    const brokerSelectArrow = document.querySelector('.broker-select')
    const brokerSelectResult = document.querySelector('.broker-select-result')
    const brokerLinks = document.querySelectorAll('.broker-link')
    const popupRegForm = document.querySelector('.popup_reg_form')

    popupRegClose.addEventListener('click', ()=>{
        popupReg.style.display='none'
    })
    popupReg.addEventListener('click', ()=>{
        popupReg.style.display='none'
    })
    popupRegForm.addEventListener('click', (e)=>{
        e.stopPropagation()
    })

    selectArrow.addEventListener('click', ()=>{
        searchSelectBlock.classList.add('select-input_result-block-active')
    })

    for (let resultButton of selectResult){
        resultButton.addEventListener('click', ()=> {
            searchSelectBlock.classList.remove('select-input_result-block-active')
        })
    }

    for (let brokerLink of brokerLinks){
        brokerLink.addEventListener('click', ()=> {
            brokerSelectResult.classList.remove('select-input_result-block-active')
        })
    }

    brokerSelectArrow.addEventListener('click', ()=> {
        brokerSelectResult.classList.add('select-input_result-block-active')
    })
})

    //popup//
const popupReg= document.querySelector('.popup_reg')
const popUpButton = document.querySelector('.open-popup-reg')
const openPopup =()=>{
    popupReg.style.display='block'
}

popUpButton.addEventListener('click', openPopup )




///lang
const langBlock = document.querySelector('.select-lang')
const dropDownButton= document.querySelector('.dropdown-icon')
const langResultBlock = document.querySelector('.lang-result')
const langButton = document.querySelector('.lang-button')
const langVariant = document.querySelector('.lang-variant')
const dropDownButtonRed= document.querySelector('.dropdown-icon-red')
const langInfo = document.querySelectorAll('.lang-info')
const langWord = document.querySelector('.lang-word')
const main = document.querySelector('.main')

//открыть результаты
langBlock.addEventListener('click', ()=>{
    // if(langResultBlock.style.display='none'){
    //     langResultBlock.classList.add('select-lang_active')
    // }else {
    //     langResultBlock.classList.remove('select-lang_active')
    // }
    langResultBlock.classList.toggle('lang-result_active')
    if(langResultBlock.classList.contains('lang-result_active')){
        dropDownButtonRed.style.transform='rotate(180deg)'
        dropDownButton.style.transform='rotate(180deg)'
    } else {
        dropDownButtonRed.style.transform='rotate(0deg) translateY(10px)'
        dropDownButton.style.transform='rotate(0deg)'
    }
})

langResultBlock.addEventListener('click', (e)=>{
    e.stopPropagation()
})

main.addEventListener('click', ()=>{
    langResultBlock.classList.remove('lang-result_active')
    dropDownButton.style.transform='rotate(0deg)'
    dropDownButtonRed.style.transform='rotate(0deg) translateY(10px)'
})


langInfo.forEach((item)=>{
    item.addEventListener('click', ()=>{
        setTimeout(()=>{
            langResultBlock.classList.remove('lang-result_active')
            dropDownButton.style.transform='rotate(0deg)'
            dropDownButtonRed.style.transform='rotate(0deg) translateY(10px)'
        }, 100)

    })
})
