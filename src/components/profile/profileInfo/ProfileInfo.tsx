import React from "react"
import classes from './ProfileInfo.module.css'
type ProfileInfoProps = {
    avatar: string
}
export const ProfileInfo: React.FC <ProfileInfoProps> = ({avatar}) =>{
    return (
        <div className={classes.profileInfo}>
            <div>
                <img style={{ width: "790px" }} src="https://www.bgoperator.ru/pr_img/1000787/20160930/39057527/marvel-img-worlds-of-adventure-dubai.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                {avatar} + des
            </div>
        </div>
    )
}