import { useEffect } from "react";
import autoComplete from "@tarekraafat/autocomplete.js";

export default function Search() {
  var searchData = [
    { keywords: "Home", url: "/" },
    { keywords: "Kids Care", url: "/kidsCare" },
    { keywords: "Directions", url: "/directions" },
    { keywords: "Community", url: "/community" },
    { keywords: "Services", url: "/services" },
    { keywords: "Education", url: "/education" },
    { keywords: "Staff", url: "/staff" },
    { keywords: "Beliefs", url: "/beliefs" },
    { keywords: "Worship", url: "/worship" },
    { keywords: "Ministries", url: "/ministries" },
    { keywords: "Photos", url: "/photos" },
    { keywords: "Calendar", url: "/calendar" },
    { keywords: "Publications", url: "/publications" },
    { keywords: "Contact Info", url: "/contact" },
    { keywords: "Prayer Request", url: "/prayer-request" },
    { keywords: "Building Use Request", url: "/building-request" },
    { keywords: "Information Request", url: "/information-request" },
    {
      keywords: ["GLOW", "God Lights Our Way"],
      url: "/GLOW",
    },
    {
      keywords: ["JAM", "J.A.M", "Jesus and Me"],
      url: "/JAM",
    },
    { keywords: "Pastors Message", url: "/pastorsmessage" },
    {
      keywords: ["Pastors Message Ash Wednesday", "Ash Wednesday"],
      url: "/pastorsmessageAshWednesday",
    },
    {
      keywords: ["Pastors Message Lent", "Lent"],
      url: "/pastorsmessageLent",
    },
    {
      keywords: ["SWAG", "S.W.A.G", "Youth Group"],
      url: "/ciayouth",
    },
    {
      keywords: "Missions of the Month",
      url: "/missionmoment",
    },
    {
      keywords: "Mission Team",
      url: "/missionmomentTeams",
    },
    {
      keywords: "Bread Ministry",
      url: "/MinistryBread",
    },
    {
      keywords: ["VBS", "V.B.S", "Vacation Bible School"],
      url: "/VBS",
    },
    {
      keywords: "Kids Shopping Day",
      url: "/MinistryKidsShoppingDay",
    },
    {
      keywords: "UMC Scholarships",
      url: "/scholarships",
    },
    {
      keywords: "Easter Egg Hunt",
      url: "/MinistryEasterEggHunt",
    },
    {
      keywords: "Trunk or Treat",
      url: "/trunkortreat",
    },
    {
      keywords: "Alternative Christmas Giving",
      url: "/alternativechristmasgiving",
    },
    {
      keywords: "Chancel Choir & Praise Team",
      url: "/choir",
    },
    {
      keywords: "Confirmation",
      url: "/MinistryConfirmation",
    },
    {
      keywords: ["Bible Giving", "Bible Presentation", "3rd Grade Bible"],
      url: "/3rdGradeBibleClass",
    },
    {
      keywords: "Special Services",
      url: "/specialservices",
    },
    {
      keywords: "Children's Christmas Program",
      url: "/MinistryChildrensChristmasProgram",
    },
    {
      keywords: "Choir Christmas Cantata",
      url: "/MinistryChristmasCantata",
    },
    {
      keywords: "Easter Breakfast",
      url: "/MinistryEasterBreakfast",
    },
    {
      keywords: "Candlelight Service Christmas Eve",
      url: "/MinistryChristmasEveCandlelight",
    },
    {
      keywords: ["Shrove Tuesday Pancake Supper", "Fat Tuesday Supper"],
      url: "/MinistryShroveTuesday",
    },
    {
      keywords: ["The Grapevine", "Sunday News Bulletin"],
      url: "/Publications/VMgrapevine.pdf",
    },
    {
      keywords: "Newsletter",
      url: "/Publications/churchnewsletter.pdf",
    },
    {
      keywords: ["Bible Verses for the week", "Liturgy This Week"],
      url: "/Publications/LiturgyThisWeek.pdf",
    },
    {
      keywords: "Church Bulletin",
      url: "/Publications/vmbulletin.pdf",
    },
    {
      keywords: ["Adel Ministerial Association (AMA) Emergency Fund", "Assistance Fund"],
      url: "/Publications/Adel_Ministerial_Assn_Emergency_Fund.pdf",
    },
    {
      keywords: ["Luke DeBoer Update", "Missionary in Puerto Rico", "DeBoer newsletter"],
      url: "/Publications/LukeDeBoerUpdate.pdf",
    },
    {
      keywords: ["Good Samaritan Food Pantry in Adel", "Missions Food Pantry"],
      url: "/Publications/MissionsFoodPantry.pdf",
    },
    {
      keywords: "Exercise Your Faith Small Group Study",
      url: "/Publications/ExerciseYourFaith.pdf",
    },
    {
      keywords: ["Greeting Cards Recycled by SAM", "VMUMC Senior Adult Ministry"],
      url: "/Publications/SAM_card_ministry.pdf",
    },
    {
      keywords: "Kids Care Parent Handbook",
      url: "/Publications/KidsCare2024ParentHandbook.pdf",
    },
    {
      keywords: "Kids Care Schedule and Fees",
      url: "/Publications/KidsCarePrintable.pdf",
    },
    {
      keywords: "Summer 2024 Kids Care Registration Form",
      url: "/Publications/KidsCare2024SummerRegistration%20form.pdf",
    },
    {
      keywords: "Fall 2024 Kids Care Registration Form",
      url: "/KidsCare2024Preschool(Fall)Registration.pdf",
    },
    {
      keywords: "Spring 2024 Kids Care Registration Form",
      url: "/Publications/KidsCare2023FallRegistrationForm.pdf",
    },
    // Add more data as needed
  ];
  {
    useEffect(() => {
      // Initialize Autocomplete.js
      const autoCompleteJS = new autoComplete({
        selector: "#autoComplete",
        data: {
          src: searchData.map((item) => item.keywords).flat(), // Use values from searchData
          cache: true,
        },
        resultsList: {
          element: (list: HTMLElement, data: { results: any[]; matches: any[]; query: string }) => {
            const info = document.createElement("p");
            info.setAttribute("class", "px-2 mb-0 pb-0");
            if (data.results.length > 0) {
              info.innerHTML = `Displaying <strong>${data.results.length}</strong> out of <strong>${data.matches.length}</strong> results`;
            } else {
              if (!data.results.length) {
                info.setAttribute("class", "p-2 mt-2");
              }
              info.innerHTML = `Found <strong>${data.matches.length}</strong> matching results for <strong>"${data.query}"</strong>`;
            }
            list.prepend(info);
          },
          noResults: true,
        },
        resultItem: {
          highlight: true,
        },
        events: {
          input: {
            selection: (event: CustomEvent) => {
              const selection = event.detail.selection.value;
              const selectedData = searchData.find((item) =>
                Array.isArray(item.keywords)
                  ? item.keywords.includes(selection)
                  : item.keywords === selection
              );
              if (selectedData) {
                window.location.href = selectedData.url;
              }
            },
            keydown: function (event: KeyboardEvent) {
              if (event.keyCode === 13) {
                autoCompleteJS.select(0);
              }
            },
            focus: function () {
              const inputValue = autoCompleteJS.input.value;

              if (inputValue.length) autoCompleteJS.start();
            },
          },
        },
      });
    }, []);

    return (
      <div className="autoComplete_wrapper">
        <input
          id="autoComplete"
          type="search"
          dir="ltr"
          spellCheck="false"
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          placeholder="Search"
        />
      </div>
    );
  }
}
