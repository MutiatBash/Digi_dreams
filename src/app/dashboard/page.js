// import Head from "next/head";
// import { useState, useEffect } from "react";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import Link from "next/Link";
export default function Dashboard() {
  return (
    <div class="dasboard">
      <main>
        {/* nav bar */}
        <div class="">
          <div class="navbars">
            <div class="nav">
              <img
                src="../images/Logo.png"
                alt="logo"
                width="32px"
                height="32px"
              />
              <a href="/signup">
                <div>
                  <img
                    src="images/profile-picture.png"
                    alt="profile"
                    width="32px"
                    height="32px"
                    id="side-p"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* <!-- story section --> */}
          <div class="flex flex-row">
            <div id="story">
              <div>
                <div>
                  <img
                    src="images/add-story.png"
                    alt=""
                    width="56px"
                    height="56px"
                  />
                </div>
                <p>Add Story</p>
              </div>
              <div>
                <div>
                  <img
                    src="images/profile-picture.png"
                    class="status"
                    alt=""
                    width="56px"
                    height="56px"
                  />
                </div>
                <p>My Story</p>
              </div>
              <div>
                <div>
                  <img
                    src="images/girl1.png"
                    class="status"
                    alt="cherish"
                    width="56px"
                    height="56px"
                  />
                </div>
                <p>Cherish.eth</p>
              </div>
              <div>
                <div>
                  <img
                    src="images/skeleton.png"
                    class="status"
                    alt=""
                    width="56px"
                    height="56px"
                  />
                </div>
                <p>ntfnow</p>
              </div>
              <div>
                <div>
                  <img
                    src="images/mike.png"
                    class="status"
                    alt=""
                    width="56px"
                    height="56px"
                  />
                </div>
                <p>Mikes Adams</p>
              </div>
              <div>
                <div>
                  <img
                    src="images/cordon.png"
                    class="status"
                    alt=""
                    width="56px"
                    height="56px"
                  />
                </div>
                <p>Cordon</p>
              </div>
            </div>
            {/* <div class="web3post"></div> */}

            {/* <!-- posts section --> */}
            {/* {posts.map((post, index) => ( */}
            {/* <div id="web3" key={index}> */}
            <div class="webl">
              <div>
                {/* { post. */}

                <img
                  src="images/web3logo.png"
                  alt=""
                  class="status"
                  width="30px"
                  height="30px"
                />
                {/* // } */}
              </div>
              <img
                src="images/more_icon.png"
                alt="more"
                width="4px"
                height="24px"
              />
            </div>
            {/* <!-- <div class="posts"> --> */}
            <a href="/signup" class="hand">
              <img
                src="images/web3-polygon.png"
                class="posts"
                alt=""
                height="300px"
                width="359px"
              />
            </a>
            {/* <video >
              <source src={post.metadata.media[0].original.url} type="video/mp4" control width="426px"
              height="300px"/>
            </video> */}
            {/* <!-- </div> --> */}
            <div class="interact">
              <div class="like">
                <img
                  src="images/like.png"
                  alt="like"
                  width="20.8px"
                  height="20px"
                />
                <img
                  src="images/comments.png"
                  alt="comment"
                  width="20px"
                  height="20px"
                />
                <img
                  src="images/share.png"
                  alt="share"
                  width="20px"
                  height="20px"
                />
              </div>
              <div class="dots">
                <div class="dot active"></div>
                <div class="dot"></div>
              </div>
              <div>
                <img src="images/save.png" alt="" width="15px" height="20px" />
              </div>
            </div>
            <div class="liked">
              <div>
                <img
                  src="images/liked-by.png"
                  alt=""
                  width="44px"
                  height="20px"
                />
              </div>
              <p>Liked by Zainab and 60 others</p>
            </div>
            <div class="content">
              <p class="web3cont"></p>
              <p>{/* <span>...Read more</span> */}</p>
            </div>

            {/* task bar */}
            <div class="taskbars mobile">
              {/* post icon */}

              {/* <img
            src="images/create-post.png"
            alt="create post"
            class="crea tepost"
          /> */}
              <div class="taskbar mobile">
                <a href="/dashboard">
                  <div class="hand">
                    <img src="images/home.png" alt="home icon" />
                    <p>Home</p>
                  </div>
                </a>
                <a href="/explore-profiles">
                  <div class="hand">
                    <img src="images/communities.png" alt="communities icon" />
                    <p>Profiles</p>
                  </div>
                </a>
                <a href="/my-activities">
                  <div class="hand">
                    <img src="images/activities.png" alt="activities icon" />
                    <p>My Activities</p>
                  </div>
                </a>
                <a href="/create-post">
                  <div class="hand">
                    <img
                      src="images/create-post.png"
                      alt="create post"
                      class="createpost2"
                    />
                    <p>Create Post</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
