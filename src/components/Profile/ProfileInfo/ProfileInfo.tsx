import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://avatars.mds.yandex.net/i?id=f827afa7ca644b4c7f0d046dca1986c67cc21d80-9181195-images-thumbs&n=13' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )

}
export default ProfileInfo;