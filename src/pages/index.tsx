import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useContext, useEffect } from "react";
import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import CountdownProvider from "../contexts/CountdownContext";
import { RounterContext } from "../contexts/RounterContext";
import styles from '../styles/pages/Home.module.css';



interface HomeProps{
  level: number,
  currentExperience:number,
  challengeCompleteds: number
}

export default function Home({
  level,
  currentExperience,
  challengeCompleteds
}: HomeProps) {

  const {activeRouter} = useContext(RounterContext);

  useEffect(() => {
    activeRouter("/");
  },[])


  return (

    <div className={styles.container}>
   
        level={level}
        currentExperience={currentExperience}
        challengeCompleteds={challengeCompleteds}>
        <Head>
          <title>
            Inicio | MoveIt
        </title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengeCompleteds } = ctx.req.cookies;


  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleteds: Number(challengeCompleteds)
    }
  }
}
