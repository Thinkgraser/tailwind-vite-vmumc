import { useEffect } from "react";
import { HomeSection } from "../components";
import { Beth } from "../assets";

export default function PastorsMessage() {
  useEffect(() => {
    document.title = "Pastor's Message - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <div className="mx-5 my-10 space-y-4">
      <h1 className="text-4xl font-medium text-center">Pastor Beth's Message Blog</h1>
      <br />
      <h4 className="text-center font-medium text-2xl">We're glad you stopped by.</h4>
      <br />
      <hr className=" border-black opacity-25" />
      <br />
      <HomeSection
        text={
          <div className="space-y-10 text-center lg:text-start lg:mb-12">
            <h2 className=" font-medium text-2xl lg:text-4xl">Connecting - March 2024</h2>
            <h2 className=" font-medium text-2xl lg:text-4xl">Marching Orders</h2>
          </div>
        }
        textSectionWidth="10"
        imageSectionWidth="2"
        image={Beth}
        alt="Glow Logo"
        imageSmallWidth="6/12"
        imageLargeWidth="10/12"
        imageSide="left"
      />
      <p>
        March! Spring will arrive this month. The seasons are changing and it feels like time is
        moving more quickly than ever, Marching on. Maybe it is all the changes that we are
        experiencing. Technology and information are changing faster than ever and it is a lot to
        take in. But much is the same. The seasons are much the same. The human body has not really
        changed much in 100,000 years. Not even the capabilities of our human brains have changed
        much. The brain and nervous system have the miraculous ability to translate and integrate
        and organize all the feelings and information (mostly subconscious) that is coming in
        through all the human senses. When we take the time to realize just how much data this is
        that our miraculous body can handle, we know that there is a
        <em>
          Spirit that connects it all, individually and socially, beyond any single human's ability
          to consciously understand it.
        </em>
      </p>
      <p>
        Why is it important to care about this? Well, there are those who want to work with these
        new understandings for the betterment of all human life and the environment, and there are
        those who do not. What is needed for humanity to continue to live well is claimed by the
        Holy in Jeremiah 29:11:
        <em>
          "For surely I know the plans I have for you, says the Lord, plans for your welfare and not
          for harm, to give you a future with hope."{" "}
        </em>
        We have been given the ability to use our God-given abilities to discern together what these
        plans are for the Holy to give us a future with hope. Then, through Christ, we have been
        given a witness of how to go about it: with love and integrity.
      </p>
      <p>
        That sounds like marching orders to me! Each of us has received some understanding of the
        plans that the Lord has for us, for ourselves but more importantly for all humanity; we are
        each called to share what we have learned through our various spiritual gifts.
      </p>
      <p>
        This Lenten season, I am called to share what I learn as I integrate scripture, theology,
        and other evidence-based learnings on the subject of how we learn and teach. It is important
        for all of us to share what the Holy is calling us to witness to others, especially on how
        our children are being raised and taught.
      </p>
      <p>
        We may each think that there are other people who know more than we know, but the reality is
        that<em> it is our integrated understanding that is most important</em>. We have many social
        and cultural "experiments" that we have learned from being together as a society and even as
        a species. Why not take the time to listen to one another, especially to those who find
        understanding through evidence-based and time-tested research and study. But all of us need
        to get the basic understanding so that we can move forward as a community within other
        communities in the wisest way.
      </p>
      <p>
        As Christians, we feel that this way is for each to care, to strive to understand, and to
        connect our common understanding.
        <em>
          All of us have access to this capacity, these miracles that are our body, mind, and spirit
        </em>
        . Our marching orders are to not sell this short! We are not to give away our
        response-ability to use it and not let it be used or abused by others.
      </p>
      <p>
        There is certain wisdom and practical knowledge that we can trust, especially when it is
        tried and true; and there is some that we simply can't. Science and theology tell us that it
        is the evidence-based that we can have the most faith in. Christian scripture and
        discernment have given the world helpful social norms. Let us work together to figure out
        what is most important for us to learn together to integrate for our common understanding
        about love, life, and the future of humanity that the Holy has been gradually developing for
        a long, long, long time.
      </p>
      <p>
        I have faith in what John Wesley used as a method of integrating personal experience, the
        experience of others, world-wide traditions, time-tested scripture, and our God-given
        ability to reason. I think that this is a great method to discern with one another.
        <em>
          Let's create some discussion groups to explore what our God is planning for us to discern
          together for a greater common understanding of the Holy Plan for us!
        </em>
      </p>
      <p>We have our marching orders.</p>
      <p>
        <em>Rev. Beth </em>
      </p>
    </div>
  );
}
