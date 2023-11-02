/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spike3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Spike", "./Spike3/costumes/Spike.png", { x: 479, y: 57 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINAL FIGHT" },
        this.whenIReceiveFinalFight
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dissapear" },
        this.whenIReceiveDissapear
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenIReceiveFinalFight() {
    yield* this.wait(3.5);
    this.visible = true;
    this.goto(-70, 229);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite1"].y - this.y,
        this.sprites["Sprite1"].x - this.x
      )
    );
    yield* this.wait(0.2);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite1"].y - this.y,
        this.sprites["Sprite1"].x - this.x
      )
    );
    yield* this.wait(0.2);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite1"].y - this.y,
        this.sprites["Sprite1"].x - this.x
      )
    );
    yield* this.wait(0.2);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite1"].y - this.y,
        this.sprites["Sprite1"].x - this.x
      )
    );
    yield* this.wait(0.2);
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite1"].y - this.y,
        this.sprites["Sprite1"].x - this.x
      )
    );
    yield* this.wait(0.5);
    while (!this.touching(Color.rgb(19, 7, 7))) {
      this.move(45);
      yield* this.wait(0.01);
      yield;
    }
    yield* this.wait(3);
    this.broadcast("Dissapear");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDissapear() {
    this.visible = false;
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
