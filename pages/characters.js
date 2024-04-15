import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import allAncestries from "../data/characters";
import weapons from "../data/equipment/weapons.json";
import armors from "../data/equipment/armor.json";
import gears from "../data/equipment/gear.json";
import exoticas from "../data/equipment/exotica";
import mysticGifts from "../data/equipment/mysticGifts";
import cybernetics from "../data/equipment/cybernetics";

import { randomFromArray, rollAllTables } from "../data/utils";
import ColonRoll from "../components/colonRoll";

const generateAbility = () => {
  const arr = [
    Math.floor(Math.random() * (6 - 1 + 1) + 1),
    Math.floor(Math.random() * (6 - 1 + 1) + 1),
    Math.floor(Math.random() * (6 - 1 + 1) + 1),
  ];
  const min = Math.min.apply(Math, arr);
  return min;
};

const abilities = [
  "힘",
  "민첩",
  "건강",
  "지능",
  "정신",
  "자아",
];

const Characters = () => {
  const [chosenAncestry, setChosenAncestry] = useState("");
  const [manualChosenAncestry, setManualChosenAncestry] = useState("");

  const [stats, setStats] = useState([]);
  const [rollTables, setRollTables] = useState([]);
  const [weapon, setWeapon] = useState([]);
  const [armor, setArmor] = useState([]);
  const [gear, setGear] = useState([]);
  const [exotica, setExotica] = useState([]);
  const [mysticGift, setMysticGift] = useState([]);
  const [cybernetic, setCybernetic] = useState([]);

  useEffect(() => {
    reroll();
  }, []);

  useEffect(() => {
    setRollTables(rollAllTables(chosenAncestry.rolls));
  }, [chosenAncestry]);

  useEffect(() => {
    reroll();
  }, [manualChosenAncestry]);

  const reroll = () => {
    setStats([
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
      generateAbility(),
    ]);
    !manualChosenAncestry
      ? setChosenAncestry(randomFromArray(allAncestries))
      : setChosenAncestry(
          allAncestries.filter((ancestry) => {
            return ancestry.name === manualChosenAncestry;
          })[0]
        );
    setRollTables(rollAllTables(chosenAncestry.rolls));
    setWeapon(rollAllTables(weapons.rolls));
    setArmor(rollAllTables(armors.rolls));
    setGear(rollAllTables(gears.rolls));
    setExotica(rollAllTables(exoticas.rolls));
    setMysticGift(rollAllTables(mysticGifts.rolls));
    setCybernetic(rollAllTables(cybernetics.rolls));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>캐릭터 생성기</h1>
        <button onClick={reroll}>새 시트 생성!</button>
        <label>
          Select an Ancestry (--- will choose one at random):{" "}
          <select onChange={(e) => setManualChosenAncestry(e.target.value)}>
            <option value="">---</option>
            <option value="캐클모 추방자">캐클모</option>
            <option value="캐커젠">캐커젠</option>
            <option value="파아 유목민">파아</option>
            <option value="리슬링">리슬링</option>
            <option value="버섯체">버섯체</option>
            <option value="뉴비스트">뉴비스트</option>
            <option value="플래니포크">플래니</option>
            <option value="신스">신스</option>
            <option value="트루킨">트루킨</option>
          </select>
        </label>
        <div className={styles.flex}>
          <div>
            <p>
              <b>기원:</b> {chosenAncestry.name}
            </p>
            {abilities.map((ability, i) => {
              return (
                <p key={ability}>
                  <b>{ability}</b>: +{stats[i]} <b>Defense:</b> {stats[i] + 10}
                </p>
              );
            })}
          </div>
          <div>
            {rollTables &&
              rollTables.map((table) => {
                return (
                  <ColonRoll
                    key={table.rollName + table.value}
                    rollName={table.rollName}
                    value={table.value}
                  />
                );
              })}
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>기원 설명</h3>
            <p> {chosenAncestry.description}</p>
          </div>
          <div>
            <h3>특이사항</h3>
            {chosenAncestry.special &&
              chosenAncestry.special.map((special) => {
                return <p key={special}>{special}</p>;
              })}
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>Starting Equipment</h3>
            {weapon.length && (
              <ColonRoll
                rollName="무기"
                value={
                  weapon[0].value +
                  " " +
                  weapon[1].value +
                  "-" +
                  weapon[2].value
                }
              />
            )}
            {armor.length && (
              <ColonRoll
                rollName="방어구"
                value={armor[0].value + ", " + armor[1].value}
              />
            )}
            {gear.length && (
              <ColonRoll
                rollName="도구"
                value={gear[0].value + ", " + gear[1].value}
              />
            )}
          </div>
          <div>
            <h3>Extra Gifts</h3>
            {exotica.length && (
              <ColonRoll rollName="엑소티카" value={exotica[0].value} />
            )}
            <p>
              <em>아래 둘 중 하나를 고릅니다.</em>
            </p>
            {mysticGift.length && (
              <ColonRoll
                rollName="신비로운 재능"
                value={
                  "You have the gift of " +
                  mysticGift[1].value +
                  ". You gained this power " +
                  mysticGift[0].value
                }
              />
            )}
            {cybernetic.length && (
              <ColonRoll
                rollName="사이버네틱"
                value={
                  cybernetic[0].value[0] +
                  " - " +
                  cybernetic[0].value[1] +
                  " - " +
                  cybernetic[0].value[2]
                }
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Characters;
