import { useEffect } from "react";

export default function Community() {
  useEffect(() => {
    document.title = "Van Meter UMC History - Van Meter United Methodist Church"; // Set default title
  }, []);
  return (
    <>
      <div className="text-center text-4xl font-medium pt-3 mt-10 mx-3">
        <h1>Welcome to our Community</h1>
      </div>
      <div className="mx-5 my-10 space-y-4">
        <p>
          We are so grateful that you are looking at our website as a way of getting to know our
          community. We hope to get to know you better as well, at your own pace. We require nothing
          more from you than you wish to share. We do hope that you will find a sense of belonging
          here, with the courage to participate in our ministries of worship, making friends, and
          lifting others up when needed.
        </p>
        <p>
          You will see if you keep reading that our church has been formed through the togetherness
          of many different kinds of people, each bringing their unique gifts.
        </p>
        <p>
          We see ourselves together as the Body of Christ, serving the Holy One, through our witness
          of the grace of our God through our prayers, presence, gifts, and service. Therefore we
          live out the pouring out of the love that has been given to us by partnering with the Holy
          in order to transform the world for the Kin'dom of our God. We also are here to bring
          witness of the Gospel (Good News) of the indwelling of the Holy Spirit as found in the
          scripture, the traditions, human reason, and our own experience as the authorities that we
          look to and listen for in prayer to guide us in our lives.
        </p>
        <p>
          The current Van Meter United Methodist Church is a community of people that have come
          together through mergers of several earlier congregations. In 1847 the first ministers
          were serving the settlers in the central portion of the new state of Iowa. These ministers
          were circuit riders and traveled a route from settlement to settlement to hold worship
          services. By the 1870s the congregations of the circuit riders began building permanent
          church buildings to provide shelter for the people who were worshiping in homes and tents.
        </p>
        <p>
          Union Chapel United Brethren was built in 1873 southeast of Van Meter at the corner of
          Badger Creek Road and 105th Street. In 1943 that congregation joined the Van Meter United
          Brethren Church. That church building is now a private residence.
        </p>
        <p>
          Van Meter United Brethren Church was built at the corner of Main and Ellis Streets in
          1874. The Evangelical and United Brethren congregations combined in 1946 and became the
          Van Meter Evangelical United Brethren Church. In 1969 the Methodist and the Evangelical
          United Brethren (EUB) congregations combined becoming United Methodists. This combined
          congregation was then renamed Otterbein United Methodist Church. Worship services were
          alternated monthly between this building and the First United Methodist Church. This
          building is now the Van Meter Baptist Church.
        </p>
        <p>Pleasant Grove M.E. Church was built in 1881 and was used until 1916.</p>
        <p>
          Van Meter Methodist Church was built in 1882 on the corner of Elm and 1st Streets. The
          structure was renamed First United Methodist Church in 1968. With the merger of the
          Methodist and EUB congregations in 1969 services were alternated monthly with the
          Otterbein United Methodist Church. This building is now an apartment building on the
          corner of Elm and Wilson streets, located near the Van Meter school.
        </p>
        <p>North River United Brethren Church was built in 1887 and was used until 1954.</p>
        <p>
          Jefferson United Brethren Church was built south of Van Meter on Quail Ridge Road between
          140th Street and Cumming Road in 1903. In 1960 the congregation joined the Van Meter
          United Brethren Church. Only the cemetery remains today.
        </p>
        <p>
          In the early 1970s a new building was planned and constructed on the corner of Desoto Road
          and Hazel Street. This building was consecrated in 1974 and is the current location of the
          Van Meter United Methodist Church. A Fellowship Hall was added and consecrated in 1996.
        </p>
        <p>
          In 2021, we were given five acres of land near the Van Meter school from a memorial
          bequest of some of our beloved members. We have yet to decide its use for our ministry.
          Like all gifts, it will be discerned and developed through the dance of the Holy Spirit in
          artistry of our Creator and in the love of Christ. Maybe you are here to dance with us,
          too!
        </p>
        <p>
          The above history was taken from several sources with occasional minor differences in
          details. If you have any corrections or additions, please contact{" "}
          <a className="link" href="mailto:office@vmumc.com">
            office@vmumc.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
