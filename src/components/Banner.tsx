import {BannerWEBP, BannerJPG} from '../assets/index';
export default function Banner(){
    return (
        <div id="banner">
      <picture>
        <source srcSet={BannerWEBP} type="image/webp" />
        <source srcSet={BannerJPG} type="image/jpeg" />
        <img className="w-full sm:rounded-t-lg" alt="VMUMC Banner" />
      </picture>
    </div>
    )
}