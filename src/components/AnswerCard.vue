<template>
  <div class="question_card">
    <p class="question">{{ question_text }}</p>
    <label
      class="answer"
      v-for="(item, index) in question_answers"
      :key="index"
    >
      <input
        :type="answer_type"
        :value="`answer_${index}`"
        :checked="item.valid"
        :disabled="!item.valid"
        :name="`quiz_${id}_${index}`"
      />
      <span>{{ item.text }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
  },
  computed: {
    question_text() {
      switch (this.version) {
        case "2.0":
          return this.question.title;
        case "1.0":
        default:
          return this.question.question;
      }
    },
    question_ansCount() {
      return this.question.answers.length;
    },
    question_answers() {
      return this.question.answers;
    },
    type() {
      switch (this.version) {
        case "2.0":
          let count = 0;
          for (let i in this.question.answers)
            if (this.question.answers[i].valid == true) count++;
          if (count == 1) return "single";
          else return "multiple";
        case "1.0":
        default:
          return this.question.type || "single";
      }
    },
    answer_type() {
      let returnValue;
      switch (this.type) {
        case "multiple":
          returnValue = "checkbox";
          break;
        case "single":
        default:
          returnValue = "radio";
          break;
      }
      return returnValue;
    },
  },
};
/*
// Version 1.0.0
[
  {
    id: 1,
    question: "What is Quasar?",
    type: "single",
    answers: [
      {
        id: 1,
        text: "A framework for Vue.js",
        valid: true,
      },
      {
        id: 2,
        text: "A script for Vue.js",
        valid: false,
      },
    ],
  }
]

// Version 2.0
{
  "item_1": {
    "title": "Биометрические способы защиты информационной безопасности ",
    "answers": [
      {
        "text": "голова",
        "correct": false,
        "id": 1
      },
      {
        "text": "лицо",
        "correct": true,
        "id": 2
      },
      {
        "text": "локоть",
        "correct": false,
        "id": 3
      },
      {
        "text": "ухо",
        "correct": false,
        "id": 4
      }
    ],
    "id": 1
  },
}
*/
</script>

<style lang="less" scoped>
div.question_card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease-in-out;
  ::selection {
    background: #fff2a8;
  }
  .question {
    transition: all 0.3s ease-in-out;
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  .answer {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-left: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      transition: all 0.3s ease-in-out;
      margin-right: 16px;
      display: none;
      width: 20px;
      visibility: hidden;
      &:checked + span {
        transition: all 0.3s ease-in-out;
        padding-bottom: 8px;
        color: black;
        &::selection {
          background: #b9ffa8;
        }
        &::before {
          transition: all 0.3s ease-in-out;
          outline-offset: 3px;
          background: #b9ffa8;
          outline: 1px solid #6dbe59;
        }
      }
      &:not(:checked) + span {
        transition: all 0.3s ease-in-out;
        opacity: 0;
        font-size: 0;
        padding-top: 0;
        visibility: hidden;
        &::selection {
          background: #ffa8a8;
        }
        &::before {
          transition: all 0.3s ease-in-out;
          max-width: 0;
          max-height: 0;
        }
      }
    }
    span {
      transition: all 0.3s ease-in-out;
      &::before {
        content: "";
        margin-right: 16px;
        width: 12px;
        height: 12px;
        display: inline-block;
        background: transparent;
        outline-offset: 0px;
        outline: 1px solid black;
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-color: transparent;
    .answer {
      max-height: 2600px;
      transition: all 0.3s ease-in-out;
      input {
        &:not(:checked) + span {
          opacity: 1;
          font-size: 1em;
          padding-bottom: 8px;
          visibility: visible;
          &::before {
            max-width: 12px;
            max-height: 12px;
          }
        }
      }
    }
  }
}
</style>