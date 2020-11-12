import Vue from "vue";
import Vuex from "vuex";
import db from "../components/firebaseInit";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    questions: [
      {
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
        topic: "Cost Drivers",
        question:
          "What drives you need for a change- to add value or save time?",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
        icon: "src/assets/logo.png",
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
  },
  getters: {},
  mutations: {
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
    POSTDATA(state) {
      const dataSet = [];
      state.questions.forEach((question) => {
        const dataItem = {
          question: question.question,
          value: {
            start: question.value.start,
            end: question.value.end,
          },
        };
        dataSet.push(dataItem);
      });
      console.log(dataSet);
      db.collection("questionnaire")
        .add({
          first_name: "firstName",
          last_name: "secondName",
          date: "11-11-2020",
          responses: dataSet,
        })
        .then((docRef) => {
          console.log("Client added: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error submitting data: ", error);
        });
    },
  },
  actions: {
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
      commit("POSTDATA");
    },
  },
});
