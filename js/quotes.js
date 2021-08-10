const quotes = [
    {
        quote : "늦었다고 생각할때가 제일 늦은 때다",
        author : "박명수",
    },
    {
        quote : "지금 공부 안하면 더울 때 더운데서, 추울 때 추운데서 일한다",
        author : "조커박",
    },
    {
        quote : "하나를 알고 열을 알면 무당",
        author : "십잡스",
    },
    {
        quote : "포기하면 편하다",
        author : "박거성",
    },
    {
        quote : "세번 참으면 호구된다",
        author : "2인자",
    },
    {
        quote : "즐길 수 없으면 피해라",
        author : "웃음사망꾼",
    },
    {
        quote : "가는 말이 고우면 얕본다",
        author : "거성 박명수",
    },
    {
        quote : "일찍 일어나는 새가 피곤하다",
        author : "소년명수",
    },
    {
        quote : "내일도 할 수 일은 내일하면 된다",
        author : "찮은이형"
    },
    {
        quote : "결혼과 죽음은 뒤로 미룰수록 좋다",
        author : "한머리 두냄새",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//floor = 내림, ceil = 올림, round = 반올림, random = 0~1 사이 랜덤생성
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;