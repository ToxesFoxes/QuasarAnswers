<template>
  <div class="question_card" ref="soms">
    <p class="question">{{ question_text }}</p>
    <label
      class="answer"
      v-for="(item, index) in question_answers"
      :key="index"
    >
      <input
        :type="answer_type"
        :value="`answer_${index}`"
        :name="`quiz_${question.id}`"
        :ref="`answer_${index}`"
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
    version: {
      type: String,
      required: true,
    },
  },
  computed: {
    question_id() {
      return this.question.id;
    },
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
          for (let i in this.question.answers) {
            if (this.question.answers[i].valid == true) count++;
            // console.log(i, this.question.answers[i]);
          }
          return count == 1 ? "single" : "multiple";
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
  methods: {
    animate(type, time) {
      const classes = this.$refs.soms.classList;
      classes.add(type);
      setTimeout(() => {
        classes.remove(type);
      }, time);
    },
    incorrect() {
      this.animate("incorrect", 450);
    },
    correct() {
      this.animate("correct", 1000);
    },
    getInputs() {
      const answers = [];
      for (let i in this.$refs) {
        if (i.startsWith("answer_") && this.$refs[i].length == 1)
          answers.push(this.$refs[i][0]);
        // console.log(this.$refs[i]);
      }
      // console.log(answers);
      return answers;
    },
    getResults() {
      const inputs = this.getInputs();
      var total = {
        count: 0,
        valid: 0,
        isCorrect: false,
        answers: [],
      };
      const answers = this.question_answers;

      total.count = inputs.length;
      for (let i in answers) {
        const { c1, c2 } = { c1: inputs[i].checked, c2: answers[i].valid };
        if (c1 == c2) {
          total.valid++;
        }
        total.answers.push(c1);
        // console.log(i, inputs, c1, c2, c1 == c2, total.valid);
      }
      // console.log(total);
      total.isCorrect = total.valid == total.count;
      return total;
    },
    checkValid() {
      const results = this.getResults();

      if (results.isCorrect) this.animate("correct", 1000);
      else this.animate("incorrect", 450);

      return results;
    },
  },
  mounted() {},
};
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
      &[type="radio"] {
        & + span {
          &::before {
            border-radius: 8px;
          }
        }
      }
      &:checked + span {
        transition: all 0.3s ease-in-out;
        color: black;
        &::before {
          transition: all 0.3s ease-in-out;
          outline-offset: 3px;
          background: #444444;
          outline: 1px solid #2c2c2c;
        }
      }
      &:not(:checked) + span {
        transition: all 0.3s ease-in-out;
      }
    }
    span {
      transition: all 0.3s ease-in-out;
      padding-bottom: 8px;
      &::before {
        transition: all 0.3s ease-in-out;
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
  &.incorrect {
    transition: all 0.1s ease-in-out;
    animation: incorrect 3 0.15s;
    animation-play-state: running;
  }
  &.correct {
    transition: all 1s ease-in-out;
    animation: correct 1s;
    animation-play-state: running;
  }
}
@keyframes incorrect {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes correct {
  0% {
    background: transparent;
  }
  5% {
    background: #c1f5c1;
  }
  90% {
    background: #c1f5c1;
  }
  100% {
    background: transparent;
  }
}
</style>