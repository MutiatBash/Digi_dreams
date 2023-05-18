// import Head from "next/head";
// import { useState, useEffect } from "react";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import Link from "next/Link";
export default function Dashboard() {
  return (
    <div className="dasboard">
      <main>
        {/* nav bar */}
        <div className="dashnav">
          <div className="navbars">
            <div className="nav">
              <img
                src="images/Logo.png"
                alt="logo"
                width="32px"
                height="32px"
                className="dashlogo"
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
          <div className="maincontent">
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
                    className="status"
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
                    className="status"
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
                    className="status"
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
                    className="status"
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
                    className="status"
                    alt=""
                    width="56px"
                    height="56px"
                  />
                </div>
                <p>Cordon</p>
              </div>
            </div>
            {/* <div className="web3post"></div> */}

            {/* <!-- posts section --> */}
            {/* {posts.map((post, index) => ( */}
            {/* <div id="web3" key={index}> */}
            <div className="webl">
              <div>
                {/* { post. */}

                <img
                  src="images/web3logo.png"
                  alt=""
                  className="status"
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
            {/* <!-- <div className="posts"> --> */}
            <a href="/signup" className="hand">
              <img
                src="images/web3-polygon.png"
                className="posts"
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
            <div className="interact">
              <div className="like">
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
              <div className="dots">
                <div className="dot active"></div>
                <div className="dot"></div>
              </div>
              <div>
                <img src="images/save.png" alt="" width="15px" height="20px" />
              </div>
            </div>
            <div className="liked">
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
            <div className="content">
              <p className="web3cont"></p>
              <p>{/* <span>...Read more</span> */}</p>
            </div>

            {/* task bar */}
            <div className="taskbars mobile">
              {/* post icon */}

              {/* <img
            src="images/create-post.png"
            alt="create post"
            className="crea tepost"
          /> */}
              <div className="taskbar mobile">
                <a href="/dashboard">
                  <div className="hand">
                    <img src="images/home.png" alt="home icon" />
                    <p>Home</p>
                  </div>
                </a>
                <a href="/explore-profiles">
                  <div className="hand">
                    <img src="images/communities.png" alt="communities icon" />
                    <p>Profiles</p>
                  </div>
                </a>
                <a href="/my-activities">
                  <div className="hand">
                    <img src="images/activities.png" alt="activities icon" />
                    <p>My Activities</p>
                  </div>
                </a>
                <a href="/create-post">
                  <div className="hand">
                    <img
                      src="images/create-post.png"
                      alt="create post"
                      className="createpost2"
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
