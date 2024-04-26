import {
  Beth,
  Bread,
  DiscussionGroup,
  EasterThumb,
  EmergencyFund,
  ExerciseYourFaith,
  FamiliesForward,
  GoodFriday,
  JamLogo,
  Lent,
  Nursery,
  ScholarshipImage,
  Toothpaste,
  UMCLogo,
  VBSLetters,
  VBSLogo,
  Welcome,
  WorshipHelp,
  YouthBowling,
} from "../assets";
import HomeSection from "../components/HomeSection";

export default function Home() {
  return (
    <div className="space-y-5 mx-7 mb-5">
      <div className="pt-3 mt-10">
        <HomeSection
          text={
            <div className="space-y-4">
              <p>
                The <strong>Adult Discussion Group</strong> meets each Sunday before the service at{" "}
                <strong>9:30 AM</strong> in the overflow area at the back of the sanctuary.
              </p>
              <p>
                <strong>
                  <a className="link" href="/glow">
                    GLOW
                  </a>
                </strong>
                , (<strong>G</strong>od&nbsp;<strong>L</strong>ights&nbsp;<strong>O</strong>ur&nbsp;
                <strong>W</strong>ay), our children's program, is held at the same time as the
                Sunday worship service.
              </p>
              <p>
                Our <strong>Wednesday night</strong> program for youth{" "}
                <strong>kindergarten through 6th grade</strong> is{" "}
                <strong>
                  Kids'{" "}
                  <a className="link" href="/JAM">
                    JAM
                  </a>
                </strong>
                . It runs <strong>6:00-7:30 PM</strong>.
              </p>

              <p>
                <strong>A staffed nursery is available</strong> for the care of young children
                during the worship service.
              </p>
            </div>
          }
          image={Welcome}
          alt="welcome"
          imageSectionWidth="2"
          imageLargeWidth="10/12"
          imageSmallWidth="4/12"
        />
      </div>

      <div className="lg:grid grid-cols-3 space-y-4">
        <div className="space-y-4">
          <HomeSection
            text={
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-medium lg:whitespace-normal lg:break-words lg:overflow-wrap-normal">
                  from
                  <br className="hidden lg:block" /> Rev.
                  <br className="hidden lg:block" /> Beth...
                </h1>
                <p>
                  Rev. Beth Harbaugh,
                  <br />
                  Pastor VMUMC
                </p>
              </div>
            }
            image={Beth}
            alt="Pastor Beth"
            imageSectionWidth="7"
            textSectionWidth="5"
            imageSmallWidth="6/12"
            imageLargeWidth="8/12"
          />
          <p>
            <em>
              "For surely I know the plans I have for you, says the Lord, plans for your welfare and
              not for harm, to give you a future with hope."{" "}
            </em>
            Jeremiah 29:11
            <br />
            We have been given the ability to use our God-given abilities to discern together what
            these plans are for the Holy to give us a future with hope. Then, through Christ, we
            have been given a witness of how to go about it: with love and integrity. That sounds
            like marching orders to me!
          </p>
          <p>
            <a className="link" href="/pastorsmessage">
              Click here to read Rev. Beth's Monthly Message.
            </a>
          </p>
          <p>
            Our regular announcements are in <em>The Grapevine, </em>
            <a className="link" href="/Publications/VMgrapevine.pdf">
              here
            </a>
            .
          </p>
          <p>
            Stay connected by visiting our Facebook page.{" "}
            <a
              className="link"
              href="https://www.facebook.com/Van-Meter-United-Methodist-Church-142797045750871/">
              You can click here to reach it.
            </a>
          </p>
        </div>
        <div className="self-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-medium">Welcome!</h1>
            <p>
              <b>
                <em>
                  The Van Meter United Methodist Church is a community in the service of Christ
                </em>
              </b>
              .
            </p>
            <p>
              <a className="link" href="/directions">
                Click here for directions on how to find us.
              </a>
            </p>
            <p>Call us at: (515) 996-2572</p>
            <p>
              Email us at:{" "}
              <a className="link" href="mailto:office@vmumc.com">
                office@vmumc.com
              </a>
            </p>
          </div>
        </div>
        <div className="self-center">
          <iframe
            className="overflow-hidden rounded mx-auto block"
            src="//www.google.com/calendar/embed?mode=AGENDA&height=300&wkst=1&bgcolor=%23cccccc&src=9k15r4oj9pihte8nr4s3ra7qag%40group.calendar.google.com&color=%23BE6D00&src=a8so3okd24r3jbjr546tastrg0%40group.calendar.google.com&color=%234A716C&src=5cm43rq8vd82m98u7odb5jjmas%40group.calendar.google.com&color=%23A32929&src=en.usa%23holiday%40group.v.calendar.google.com&color=%232952A3&ctz=America%2FChicago"
            width="250"
            height="300"></iframe>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3 space-y-4">
        <div className="col-span-2 space-y-4">
          <HomeSection
            text={
              <p>
                <strong>Ash Wednesday and Lent</strong>
                <br />
                <a className="link" href="/pastorsmessageashwednesday">
                  Ash Wednesday
                </a>{" "}
                marks the beginning of{" "}
                <a className="link" href="/pastorsmessagelent">
                  the Lenten season
                </a>
                . In this 40-day period, Christians worldwide prepare our hearts for Jesus' death on
                the cross and his resurrection three days later on Easter.
              </p>
            }
            image={Lent}
            imageLargeWidth="5/12"
            imageSmallWidth="5/12"
            alt='"Lent" incense cup with stylized leaf'
          />

          <HomeSection
            text={
              <p>
                <strong>
                  Good Friday, March 29
                  <br />
                  7:00 PM
                </strong>
                <br />
                We remember the betrayal, trial, and death of Jesus in a Tenebrae service.
              </p>
            }
            image={GoodFriday}
            imageLargeWidth="5/12"
            imageSmallWidth="5/12"
            alt="Good Friday (sketches of cross and a crown of thorns)"
          />
          <HomeSection
            text={
              <p>
                <strong>
                  Easter Sunday, March 31
                  <br />
                  6:30 AM Sunrise Service
                </strong>
                <br />
                Rejoice with us at this special early service, and stay after the service for
                breakfast.
                <br />
                <strong>10:45 AM Traditional Service</strong>
                <br />
                He is Risen! This service will include communion. (There will not be an Adult
                Discussion Group meeting on Easter Sunday.)
              </p>
            }
            image={EasterThumb}
            imageLargeWidth="5/12"
            imageSmallWidth="5/12"
            alt="Easter (cross draped with burial shroud; lilies)"
          />
        </div>
        <div className="text-center">
          <img
            className="w-6/12 rounded mb-4 mx-auto"
            src={UMCLogo}
            alt="UMC logo - Open Hearts, Open Minds, Open Doors"
          />
          <p>
            <b>
              The Van Meter Church is part of the{" "}
              <a className="link" href="http://www.iaumc.org/">
                Iowa Conference of the United Methodist Church.
              </a>
            </b>
          </p>
        </div>
      </div>

      <HomeSection
        text={
          <p>
            <strong>Scholarship Applications</strong>
            <br />
            High school seniors and college students active in the church are encouraged to apply
            for a scholarship.{" "}
            <a className="link" href="/scholarships">
              Learn more here.
            </a>
          </p>
        }
        image={ScholarshipImage}
        imageWidth="5/12"
        alt="JAM Jesus and Me (white cross atop paint splatter)"
        sectionWidth="8/12"
      />

      <HomeSection
        text={
          <p>
            <strong>
              June 17-21, Monday-Friday
              <br />
              1:00-3:30 PM
              <br />
              VBS: Vacation Bible School
            </strong>
            <br />
            Children going into<strong> TK-5th grade</strong> will gather each weekday at the church
            for fun with a focus of learning more about God at our Vacation Bible School. We'll have
            crafts, songs, science, story time, outdoor games, and snacks. <br />
            <a className="link" href="https://vbspro.events/p/events/vmumcvbs2024">
              Register here
            </a>
            ;{" "}
            <a className="link" href="/vbs">
              learn more and view pictures from prior years here
            </a>
            .<br />
            We're looking for volunteers (
            <a className="link" href="https://vbspro.events/p/events/vmumcvbs2024">
              click here
            </a>
            ) and donors (
            <a
              className="link"
              href="https://www.amazon.com/hz/wishlist/ls/2FGO50SPTWDHF?ref_=wl_share">
              click here to go to our wish list on Amazon
            </a>
            )
          </p>
        }
        image={VBSLogo}
        imageWidth="5/12"
        alt="JAM Jesus and Me (white cross atop paint splatter)"
        sectionWidth="8/12"
        textUnderImage={
          <a className="w-5/12 block mx-auto mt-8" href="/vbs">
            <img className="rounded w-full" src={VBSLetters} alt="VBS" />
          </a>
        }
      />

      <HomeSection
        text={
          <p>
            <strong>
              Youth Fellowship - Bowling
              <br />
              Tuesday, March 26
              <br />
              4:30-7:30 PM
            </strong>
            <br />
            The youth group will have a night of fun, fellowship, bowling, and pizza. Meet at the
            church; transportation is provided.
            <br />
            <br />
            <a className="link" href="/ciayouth">
              Learn more about youth meetings and activites here.
            </a>
          </p>
        }
        image={YouthBowling}
        imageSmallWidth="5/12"
        imageLargeWidth="5/12"
        alt="JAM Jesus and Me (white cross atop paint splatter)"
        sectionWidth="8/12"
      />

      <HomeSection
        text={
          <p>
            <strong>
              Wednesday evenings
              <br />
              6:00-7:30 PM
              <br />
              <a className="link" href="/jam">
                Kids' J.A.M. (Jesus and Me)
              </a>
              <br />
            </strong>
            This is our Wednesday night program for elementary-age students to learn the love of
            Jesus while having fun. Drop-ins are welcome.
            <br />
            <br />
            If you would like to volunteer to lend a hand with J.A.M. (for just one evening or
            several) call the church office or just sign up at the church.
          </p>
        }
        image={JamLogo}
        imageSmallWidth="6/12"
        imageLargeWidth="6/12"
        alt="JAM Jesus and Me (white cross atop paint splatter)"
        sectionWidth="8/12"
      />
      <HomeSection
        text={
          <p>
            <strong>
              <a className="link" href="/missionmoment">
                Missions of the Month
              </a>
              <br />
            </strong>
            <br />
            <strong>Families Forward (Bidwell Riverside)</strong>
            <br />
            We're collecting funds and also sacks for groceries from the Bidwell Food Pantry.
          </p>
        }
        image={FamiliesForward}
        imageSmallWidth="6/12"
        imageLargeWidth="6/12"
        alt="families forward logo"
        sectionWidth="8/12"
      />
      <HomeSection
        text={
          <p>
            <strong>
              Good Samaritan Food Pantry in Adel
              <br />
            </strong>
            We are collecting toothpaste for the pantry.{" "}
            <a className="link" href="/Publications/MissionsFoodPantry.pdf">
              Learn more about the food pantry here.
            </a>
          </p>
        }
        image={Toothpaste}
        imageSmallWidth="3/12"
        imageLargeWidth="4/12"
        alt="toothpaste in and out of the tube"
        sectionWidth="8/12"
      />
      <HomeSection
        text={
          <p>
            <strong>Sundays</strong>:
            <strong>
              <br />
              9:30 AM Adult Discussion Group
              <br />
            </strong>
            meets in the overflow area behind the sanctuary. The current topic is based on Adam
            Hamilton's book <em>Wrestling with Doubt - Finding Faith</em>. Reading the book is not
            required.
          </p>
        }
        image={DiscussionGroup}
        imageSmallWidth="3/12"
        imageLargeWidth="4/12"
        alt="Adult Discussion Group logo is several crosses united at the base to form a ship's wheel."
        sectionWidth="8/12"
      />
      <HomeSection
        text={
          <p>
            <strong>Sign up to be a Worship Helper</strong>
            <br />
            You may use{" "}
            <a className="link" href="https://www.signupgenius.com/go/4090D4BA4A82EA3FD0-worship">
              this link
            </a>{" "}
            or just talk to Leslie Herman.
          </p>
        }
        image={WorshipHelp}
        imageSmallWidth="3/12"
        imageLargeWidth="4/12"
        alt="Worship Helper logo is an open door with light shining through, with the words 'Worship Helpers' above the door."
        sectionWidth="8/12"
      />
      <HomeSection
        text={
          <p>
            <strong>Nursery Available</strong>
            <br />
            We offer care for the very young during church services in our staffed nursery.
          </p>
        }
        image={Nursery}
        imageSmallWidth="3/12"
        imageLargeWidth="4/12"
        alt="Nursery (drawing of a rocking horse)"
        sectionWidth="8/12"
      />
      <HomeSection
        text={
          <p>
            <strong>Exercise Your Faith</strong>
            <br />
            Our{" "}
            <a className="link" href="/Publications/ExerciseYourFaith.pdf">
              exercise group
            </a>{" "}
            meets at the church each <strong>Monday</strong> from <strong>1:30-2:30 PM</strong>.
            Join us for a time of low-impact exercises (no floor work), encouragement, and sharing
            health tips.
          </p>
        }
        image={ExerciseYourFaith}
        alt="Exercise Your Faith logo (walking group)"
        sectionWidth="8/12"
        imageSmallWidth="5/12"
      />
      <HomeSection
        text={
          <p>
            <strong>Bread Ministry</strong>
            <br />
            We have a{" "}
            <a className="link" href="/ministrybread">
              bread ministry
            </a>{" "}
            in cooperation with Panera Bread company. We need help picking up packages from Panera
            and bringing them to the church. Sign up for a one-time delivery or several.{" "}
            <a className="link" href="https://www.signupgenius.com/go/4090d4ba4a82ea3fd0-panara">
              Sign up by clicking on this link.
            </a>
          </p>
        }
        image={Bread}
        alt="bread (three baguettes)"
        sectionWidth="8/12"
        imageSmallWidth="5/12"
      />
      <HomeSection
        text={
          <p>
            <strong>Need Help?</strong>
            <br />
            Our church is a member of the Adel Ministerial Association (AMA). The AMA has an
            emergency fund which is used as a shared resource.{" "}
            <a className="link" href="/Publications/Adel_Ministerial_Assn_Emergency_Fund.pdf">
              Learn more here.
            </a>
          </p>
        }
        image={EmergencyFund}
        alt="Emergency Funds"
        sectionWidth="8/12"
        imageSmallWidth="6/12"
      />
      <div className="text-center">
        <em>
          The Cross and Flame is a registered trademark and the use is supervised by the General
          Council on Finance and Administration of The United Methodist Church. Permission to use
          the Cross and Flame must be obtained from the General Council on Finance and
          Administration of The United Methodist Church: Legal Department, GCFA, Post Office Box
          340029, Nashville, TN 37203-0029, Phone: 615-369-2334
        </em>
      </div>
    </div>
  );
}
