import React from 'react';
import styles from './profile.module.css'
import MyPosts from "./myPosts/myposts";
import ProfileInfo from "./profileInfo/profileInfo";
import Preloader from "../../utils/common/preloader/Preloader";

const Profile = ({profile, userStatus, updateUserStatus, posts,
                   addPost, deletePost, isOwner, updateUserPhoto, updateUserProfile}) => {
    if(!profile) return <Preloader />
    return (
        <div className={styles.profile}>
            <h2 className={styles.title}>Profile</h2>
            <ProfileInfo profile={profile}
                         userStatus={userStatus}
                         updateUserStatus={updateUserStatus}
                         isOwner={isOwner}
                         updateUserPhoto={updateUserPhoto}
                         updateUserProfile={updateUserProfile}/>
            <MyPosts posts={posts}
                     profile={profile}
                     addPost={addPost}
                     deletePost={deletePost}
                     isOwner={isOwner}/>
        </div>
    )
}


export default Profile