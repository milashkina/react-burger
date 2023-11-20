import style from "../profile/profile.module.css"
import {ProfileNav} from "./profile-nav/profile-nav";
import {ProfileEdit} from "./profile-edit/profile-edit";

export const ProfilePage = () => {

  return(
    <article className={`${style.profileLayout} + mt-20`}>
      <section className={`${style.sectionLayout} `}>
        <ProfileNav />
        <span className={`text text_type_main-small text_color_inactive p-3`}>В этом разделе вы можете изменить свои персональные данные</span>
      </section>
      <ProfileEdit />
    </article>
  )
}
