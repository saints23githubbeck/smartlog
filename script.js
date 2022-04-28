const DropDownMenu = () => {
  const dropBtn = document.querySelectorAll(".dropDown .navWrapper")
  const dropMenu = document.getElementsByClassName('dropMenu')
  const arrowDown = document.getElementsByClassName("downIconArrow")
  const arrowUp = document.getElementsByClassName("upIconArrow")

  Array.from(dropBtn).forEach((button, index) => {
    const eachMenu = dropMenu[index]
    const eachArrowDown = arrowDown[index]
    const eachArrowUp = arrowUp[index]

    button.addEventListener("click", (e) => {
      e.preventDefault()
      eachMenu.classList.toggle("toggleMenu")
      eachArrowDown.classList.toggle("hide")
      eachArrowUp.classList.toggle("show")
    })
  })
}

DropDownMenu()


const navPopUp = () => {
  const profileBtn = document.querySelectorAll(".profile")
  const profileInfo = document.querySelectorAll(".profileInfo")
  const announcementBtn = document.querySelectorAll(".announcementBtn")
  const announcementPopUp = document.querySelectorAll(".announcementPopUp")

  Array.from(profileBtn).forEach((eachBtn, index) => {

    const eachProfileInfo = profileInfo[index]

    eachBtn.addEventListener("click", (e) => {
      e.preventDefault()

      eachProfileInfo.classList.toggle("showProfile")
    })

    const eachAnnouncementButton = announcementBtn[index]
    const eachPopUpAnnouncement = announcementPopUp[index]

    eachAnnouncementButton.addEventListener("click", (e) => {
      e.preventDefault()
      eachPopUpAnnouncement.classList.toggle("showAnnouncement")
    })
  })
}

navPopUp()


if (location.pathname === "/authentication.html") {
  const togglingSettings = () => {

    const toggleThrottle = document.querySelector(".toggleThrottle")
    const innerContForThrottle = document.querySelector(".innerContForThrottle")

    toggleThrottle.addEventListener("click", (e) => {
      e.preventDefault()
      innerContForThrottle.classList.toggle("throttleStatus")
    })

    const toggleForgotPassword = document.querySelector(".toggleForgotPassword")
    const innerContForPassword = document.querySelector(".innerContForPassword")

    toggleForgotPassword.addEventListener("click", (e) => {
      e.preventDefault()
      innerContForPassword.classList.toggle("throttleStatus")
    })

    const toggleRememberMe = document.querySelector(".toggleRememberMe")
    const innerContForRememberMe = document.querySelector(".innerContForRememberMe")

    toggleRememberMe.addEventListener("click", (e) => {
      e.preventDefault()
      innerContForRememberMe.classList.toggle("throttleStatus")
    })

  }

  togglingSettings()
}

if (location.pathname === "/registration.html") {
  const registrationToggling = () => {

    const toggleAllowRegistration = document.querySelector(".toggleAllowRegistration")
    const innerAllowRegistration = document.querySelector(".innerAllowRegistration")

    toggleAllowRegistration.addEventListener("click", (e) => {
      e.preventDefault()
      innerAllowRegistration.classList.toggle("statusReg")
    })

    const toggleTermsAndCondition = document.querySelector(".toggleTermsAndCondition")
    const innerTermsAndCondition = document.querySelector(".innerTermsAndCondition")

    toggleTermsAndCondition.addEventListener("click", (e) => {
      e.preventDefault()
      innerTermsAndCondition.classList.toggle("statusReg")
    })

    const toggleEmailConfirmation = document.querySelector(".toggleEmailConfirmation")
    const innerEmailConfirmation = document.querySelector(".innerEmailConfirmation")

    toggleEmailConfirmation.addEventListener("click", (e) => {
      e.preventDefault()

      innerEmailConfirmation.classList.toggle("statusReg")
    })
  }
  registrationToggling()
}

if(location.pathname === "/notifications.html"){
  const emailNotification = () => {

    const toggleEmailNotification = document.querySelector(".toggleEmailNotification")
    const innerEmailNotification = document.querySelector(".innerEmailNotification")

    toggleEmailNotification.addEventListener("click" , (e) => {
      e.preventDefault()
      innerEmailNotification.classList.toggle("notificationStatus")
    })
  }

  emailNotification()
}

  
  

const fullSideBar = () => {
   
  const sideBarText = document.querySelectorAll(".sideBarText")
  const sidenav = document.getElementsByClassName("sidenav")
  const sideBarBtn = document.getElementsByClassName("sideBarBtn")


    Array.from(sidenav).forEach((eachSideNav, index) => {

     const eachSideBarText= sideBarText[index]
     const eachSideBarBtn = sideBarBtn[index]

     console.log(eachSideBarText)

      eachSideBarBtn.addEventListener("click", (e) => {
        e.preventDefault()
        
        eachSideNav.classList.toggle("showFullSideBar")
        sideBarText[0].classList.toggle("showSideBarText")
        sideBarText[1].classList.toggle("showSideBarText")
        sideBarText[2].classList.toggle("showSideBarText")
        sideBarText[3].classList.toggle("showSideBarText")
        sideBarText[4].classList.toggle("showSideBarText")
        sideBarText[5].classList.toggle("showSideBarText")
        sideBarText[6].classList.toggle("showSideBarText")
        sideBarText[7].classList.toggle("showSideBarText")
        sideBarText[8].classList.toggle("showSideBarText")
        sideBarText[9].classList.toggle("showSideBarText")
        sideBarText[10].classList.toggle("showSideBarText")
      })
    })

  
}

fullSideBar()
