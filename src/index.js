// @flow

import { html, render } from 'lit-html';

const title = _ => html`
  <h1 class="index__title">
    <a class="index__title-link">Galactic Pigs: A Prelude</a>
  </h1>
`;

const text = _ => html`
  <div class="index__text">ye olde text</div>
`;

const prompt = _ => html`
  <div class="index__prompt">Whitch will it be?</div>
`;

const choices = _ => html`
  <div class="index__choices">
    <div class="index_choice">
      <a class="index__choice-button">option a</a>
    </div>
    <div class="index__choice">
      <a class="index__choice-button">option b</a>
    </div>
  </div>
`;

const index = _ => html`
  <div class="index">
    ${title()}
    <div class="index__body">
      ${text()}
    </div>
    <div class="index__footer" aria-hidden="true">
      ${prompt()}
      ${choices()}
    </div>
    <div class="index__footer index__footer--overlay">
      ${prompt()}
      ${choices()}
    </div>
  </div>
`;

window.App = {
  start() {
    render(index(), document.getElementById('app'));
  }
}