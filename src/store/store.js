import Vue from "vue";
import Vuex from "vuex";
import { DB } from "../firebaseInit";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    questions: [
      {
        icon: require("../assets/icons/Change.png"),
        topic: "change",
        question:
          "Do you make small changes frequently, or larger changes infrequently?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Incremental",
          end: "Revolutionary",
        },
      },
      {
        icon: require("../assets/icons/Appetite.png"),
        topic: "appetite",
        question:
          "Risk drives changes/projects or practical trade offs of time/needs lead?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Conservative",
          end: "Risky",
        },
      },
      {
        icon: require("../assets/icons/Focus.png"),
        topic: "focus",
        question:
          "Are you focused on investments and performance or a client's financial lives?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Investment Centric",
          end: "Client Centric",
        },
      },
      {
        icon: require("../assets/icons/Vision.png"),
        topic: "vision",
        question:
          "How far out do you want to plan your services and solutions?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Current Services",
          end: "In 5 years",
        },
      },
      {
        icon: require("../assets/icons/Scope-of-Services.png"),
        topic: "Scope of Services",
        question:
          "From investment oversight to bookkeeping, tax, or even concierges?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Breadth (Many Servies)",
          end: "Depth (Expert Specialities)",
        },
      },
      {
        icon: require("../assets/icons/Style.png"),
        topic: "Style",
        question:
          "Do your clients have the same offerings, services, and reports?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Customized Services",
          end: "Standardized reports and Services",
        },
      },
      {
        icon: require("../assets/icons/Types-of-End-Clients.png"),
        topic: "Types of End Clients",
        question:
          "Are you clients very complex with complex estate and investments?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Complex",
          end: "Simple",
        },
      },
      {
        icon: require("../assets/icons/Cost-Drivers.png"),
        topic: "Cost Drivers",
        question:
          "What drives you need for a change to add value or save time?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Value",
          end: "Efficiency",
        },
      },
      {
        icon: require("../assets/icons/Organizational-Process.png"),
        topic: "Organisational Processes",
        question:
          "Do just a few (<3) people see a process end to end or are there many (>5) hand off points?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Decentralized/Many",
          end: "Centralized/Few",
        },
      },
      {
        icon: require("../assets/icons/Experience.png"),
        topic: "Experience",
        question:
          "Do you typically have successful technology implementations?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Naive",
          end: "Knowledgable",
        },
      },
      {
        icon: require("../assets/icons/Vendor-Relationships.png"),
        topic: "Vendor Relationships",
        question: "How do you approach service or system vendor?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Control",
          end: "Trust",
        },
      },
      {
        icon: require("../assets/icons/Operational-Service.png"),
        topic: "Operational Service",
        question:
          "Do you focus on clients and let others do perceived commodity services or its your value to make sure it is all done by you as no one cares as much?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Outsource",
          end: "In-House",
        },
      },
      {
        icon: require("../assets/icons/Technology-Service.png"),
        topic: "Technology Service",
        question:
          "The cloud offers better, safer, new more cost effective solutions or is technology safer and more reliable in house?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Outsource/Cloud/Hosted",
          end: "In-House Application",
        },
      },
      {
        icon: require("../assets/icons/Architecture.png"),
        topic: "Architecture",
        question:
          "Is it important to have data flowing easily in and out of the system?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Open, like to manipulate data",
          end: "Closed, leaving data as is",
        },
      },
      {
        icon: require("../assets/icons/Integration.png"),
        topic: "Integration",
        question:
          "Does a comprehensive pre-integrated system simpler and reduce data issues or does integrating many specific systems create a better solution?",
        value: {
          start: 10,
          end: 90,
        },
        label: {
          start: "Tightly coupled",
          end: "Best in class/focused",
        },
      },
    ],
    counter: 50,
    email: "",
  },
  getters: {},
  mutations: {
    UPDATEEMAIL(state, payload) {
      state.email = payload.email;
    },
    UPDATESTARTVALUE(state, payload) {
      const question = state.questions.find(
        (question) => question.topic === payload.topic
      );
      question.value.start = payload.value;
    },
    UPDATEENDVALUE(state, payload) {
      const question = state.questions.find(
        (question) => question.topic === payload.topic
      );
      question.value.end = payload.value;
    },
    UPDATEVALUE(state, payload) {
      const question = state.questions.find(
        (question) => question.topic === payload.topic
      );
      console.log(
        "update value vuex: question =",
        question,
        "payload =",
        payload
      );
      question.value = payload.value;
    },
    POSTDATA(state, payload) {
      //Create dataSet object for Firestore
      const dataSet = [];
      state.questions.forEach((question) => {
        const dataItem = {
          topic: question.topic,
          startValue: question.value.start,
          endValue: question.value.end,
        };
        dataSet.push(dataItem);
      });

      //Send DataSet to the Firestore
      DB.collection("questionnaire")
        .add({
          email: state.email,
          date: payload.date,
          time: payload.time,
          questionnaire: dataSet,
        })
        .then((docRef) => {
          console.log("Client added: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error submitting data: ", error);
        });

      //Create dataSet CSV format for Email
      let dataSetCSV = [];
      dataSet.forEach((item) => {
        dataSetCSV.push(`${item.topic},${item.startValue},${item.endValue}`);
      });
      dataSetCSV = dataSetCSV.join("\n");

      //Email DataSet
      const emailContent = `
      
      
      <div style="font-family:system-ui,-apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;">
        <div style="text-align: center; position: relative; padding:0.75rem 1.25rem; margin-bottom:1rem; border:1px solid transparent; border-radius:0.25rem; color:#155724; background-color:#d4edda; border-color:#c3e6cb;">
          <h1>A TMB Questionnaire has been completed by ${state.email} at ${payload.time}, ${payload.date}</h1>
          <h3>The data can be found below in CSV format ready to be copied into a spreadsheet application.</h3>
        </div>
        <div style="display:flex; justify-content:center;">
          <textarea id="txta" rows="10" cols="80" style="border-radius:0.25rem; padding:16px;
          border:none; outline: none; width:60%; line-height:1.5; background-color:#eee; max-width:300px; min-width:200px; 
          height:325px; margin:auto;" wrap="off" placeholder="Output Results" class="form-control">
topic,startValue,endValue
${dataSetCSV}
          </textarea>
        </div>
      </div>`;

      DB.collection("mail")
        .add({
          to: "thomaskupai@gmail.com",
          message: {
            subject: "TMB Questionnaire Completed!",
            text: "This is the plaintext section of the email body.",
            html: emailContent,
          },
        })
        .then(() => console.log("Queued email for delivery!"));
    },
  },
  actions: {
    updateEmail({ commit }, payload) {
      commit("UPDATEEMAIL", {
        email: payload,
      });
      console.log("email changed: ", payload);
    },
    updateValues({ commit }, payload) {
      const keys = payload.id.split("-");
      const topic = keys[0];
      const startOrEnd = keys[1];
      if (startOrEnd === "start") {
        commit("UPDATESTARTVALUE", {
          topic: topic,
          value: payload.value,
        });
      } else if (startOrEnd === "end") {
        commit("UPDATEENDVALUE", {
          topic: topic,
          value: payload.value,
        });
      }
    },
    updateValue({ commit }, payload) {
      commit("UPDATEVALUE", {
        topic: payload.topic,
        value: payload.value,
      });
    },
    logValues({ commit }) {
      const d = new Date();
      commit("POSTDATA", {
        date: d.toLocaleDateString(),
        time: d.toLocaleTimeString(),
      });
    },
  },
});
