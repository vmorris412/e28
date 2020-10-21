// Object to provide questions and responses
var quiz = {
    questions: [
        {
            text: 'Am I Wrong?',
            answers: [
                {
                    text: 'Over the line!'
                },
                {
                    text: 'You\'re not wrong, Walter! You\'re just an a$$hole!',
                    correct: true
                },
      ]
    }, {
            text: 'Those are good burgers, Walter.',
            answers: [
                {
                    text: 'Shut the f*ck up, Donny!',
                    correct: true
                },
                {
                    text: 'Thank you, Donny!'
                },
      ]
    }, {
            text: 'Phone\'s ringing, Dude.',
            answers: [
                {
                    text: 'Thank you, Donny!',
                    correct: true
                },
                {
                    text: 'Shut the f*ck up, Donny!'
                },
       ]
    }, {
            text: 'You don\'t go out looking for a job dressed like that? On a weekday?',
            answers: [
                {
                    text: 'Is this a... what day is this?',
                    correct: true
                },
                {
                    text: 'The dude abides.'
                },
       ]
    }, {
            text: '_____ if you\'re not into the whole brevity thing',
            answers: [
                {
                    text: 'El Duderino',
                    correct: true
                },
                {
                    text: 'The Dude'
                },
       ]
    }, {
            text: 'You got a date ____, baby!',
            answers: [
                {
                    text: 'Wednesday',
                    correct: true
                },
                {
                    text: 'Sunday'
                },
       ]
    }
  ]
};
// Component Vue instance for Score History
Vue.component('score-history', {
    data() {
        return {
            deleted: false,
        }
    },
    props: ['number', 'outcome'],
    template: `
    <div v-if='!deleted'>
        <ul>
            <li>Round #: {{ number }}</li>
            <li>Outcome: {{ outcome }}</li>
        </ul>
        <button v-on:click="$emit('delete-round', number)">Delete round</button>
    </div>
    `,
    methods: {
        deleteRound() {
            this.deleted = true
        },
    }
});

// The Vue Instance
let app = new Vue({
    el: '#app',
    data: {
        quiz: quiz,
        gameWon: false,
        gameLost: true,
        questionIndex: 0,
        // Array defauting to false for each question
        userResponses: Array(quiz.questions.length).fill(false),
        rounds: [],
        round: 1,

    },
    methods: {
        // gets next question
        next: function () {
            this.questionIndex++;
        },
        // calculates number of correct responses
        correct: function () {
            return this.userResponses.filter(function (val) {
                return val
            }).length;
        },
        // restarts round
        restart: function () {
            this.questionIndex = 0;
            this.userResponses = Array(quiz.questions.length).fill(false);
        },
        // Provides win/lose message
        winorlose: function () {
            if (this.userResponses.filter(function (val) {
                    return val
                }).length > 5) {
                this.gameWon = true;
                this.gameLost = false;
                this.rounds.push({
                    number: this.round++,
                    outcome: 'Won',
                })
                return ('Proud of you we all are! You got');
            } else {
                this.rounds.push({
                    number: this.round++,
                    outcome: 'Lost',
                })
                return ('You\'re a child of promise but without the necessary means for a necessary means for a higher education. You got');
            }
        },


        deleteRound(number) {
            this.rounds = this.rounds.filter((round) => round.number != number);
        }
    }
});
