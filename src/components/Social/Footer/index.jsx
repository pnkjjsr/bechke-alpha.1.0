import React from "react";
import Image from "next/image";
import Link from "next/link";

// import iconFb from "/icons/facebook-lg.png";
import s from "./style.module.scss";

export const Social = (props) => {
  return (
    <div className={s.social}>
      <h4>Follow us social network</h4>

      <div className={s.icons}>
        <Link href="https://www.facebook.com/bechkeapp">
          <a target="_blank">
            <i>
              <Image
                src="/icons/facebook-lg.png"
                alt="Like your FB page."
                width="50"
                height="50"
              />
            </i>
          </a>
        </Link>

        <Link href="https://www.twitter.com/bechkeapp">
          <a target="_blank">
            <i>
              <Image
                src="/icons/twitter-lg.png"
                alt="Like your FB page."
                width="50"
                height="50"
              />
            </i>
          </a>
        </Link>

        <Link href="https://www.instagram.com/bechkeapp">
          <a target="_blank">
            <i>
              <Image
                src="/icons/insta-lg.png"
                alt="Like your FB page."
                width="50"
                height="50"
              />
            </i>
          </a>
        </Link>
      </div>
    </div>
  );
};
