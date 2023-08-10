import React from 'react'
import {motion} from 'framer-motion';
import { AiFillIeCircle, AiFillAndroid, AiFillWindows} from 'react-icons/ai';

const Services = () => {
    return (
      <div id='services'>
          <h2>Technologies</h2>
          <section>
              <motion.div className="serviceBox1">
                  <AiFillWindows />
                  <span>Html</span>
              </motion.div>
              <motion.div className="serviceBox2">
                  <AiFillWindows />
                  <span>Css</span>
              </motion.div>
              <motion.div className="serviceBox3">
                  <AiFillWindows />
                  <span>React</span>
              </motion.div>
              <motion.div className="serviceBox4">
                  <AiFillWindows />
                  <span>NodeJs</span>
              </motion.div>
              <motion.div className="serviceBox5">
                  <AiFillWindows />
                  <span>MongoDb</span>
              </motion.div>
              <motion.div className="serviceBox6">
                  <AiFillWindows />
                  <span>Sqlite</span>
              </motion.div>
              <motion.div className="serviceBox7">
                  <AiFillWindows />
                  <span>Figma</span>
              </motion.div>
              <motion.div className="serviceBox8">
                  <AiFillWindows />
                  <span>Github</span>
              </motion.div>
              <motion.div className="serviceBox9">
                  <AiFillWindows />
                  <span>Postman</span>
              </motion.div>
              <motion.div className="serviceBox10">
                  <AiFillWindows />
                  <span>Swagger</span>
              </motion.div>
              <motion.div className="serviceBox11">
                  <AiFillWindows />
                  <span>Trello</span>
              </motion.div>
              <motion.div className="serviceBox12">
              <AiFillWindows />
                  <span>Agile scrum/kanban</span>
              </motion.div>
              <motion.div className="serviceBox13">
                  <AiFillWindows />
                  <span>Chrome DevTools</span>
              </motion.div>
              <motion.div className="serviceBox14">
              <AiFillWindows />
                  <span>Lighthouse</span>
              </motion.div>
              <motion.div className="serviceBox15">
              <AiFillWindows />
                  <span>Rich Snippet Google</span>
              </motion.div>
              <motion.div className="serviceBox16">
              <AiFillWindows />
                  <span>Schema.org</span>
              </motion.div>
              <motion.div className="serviceBox17">
              <AiFillWindows />
                  <span>WAVE Evaluation Tool</span>
              </motion.div>
              <motion.div className="serviceBox18">
              <AiFillWindows />
                  <span>W3C HTML/CSS validator</span>
              </motion.div>
             
          </section>
      </div>
    )
  }

export default Services