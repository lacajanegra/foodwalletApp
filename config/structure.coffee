# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  rootView:
    location: "example#index"

  tabs: [
    {
      title: "Beneficios"
      id: "benefits"
      location: "example#index"
    }
    {
      title: "Historial"
      id: "history"
      icon: "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_history_48px-128.png"
      location: "example#history"
    }
    {
      title: "Perfil"
      id: "profile"
      location: "example#profile"
    }
  ]


  preloads: [
    #{
    #  id: "brand-detail"
    #  location: "example#brand-detail"
    #}
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
