import style from "../profile.module.css";
import {ProfileNav} from "../profile-nav/profile-nav";
import React from "react";


export const ProfileOrdersPage = () => {
  return(
    <article className={`${style.profileLayout} + mt-20`}>
      <section className={`${style.sectionLayout} `}>
        <ProfileNav />
      </section>
    </article>
  )
}
