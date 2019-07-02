import React, { Fragment } from "react";
import { connect } from "react-redux";

class PCParts extends React.Component {
  render() {
    return (
      <Fragment>
        <h2 >
          PC Parts &mdash; What Do They Do?
        </h2>

        <div  id="cleanUp">
          <span>
            <h3 >CPU (Central Processing Unit)</h3>

            <p>
              The CPU is the brain of the computer it runs all of the
              calculations for the computer.
            </p>
          </span>
          <br />

          <span>
            <h3 >CPU Cooler</h3>

            <p>
              This cools down the CPU so it can run at an optimal temperature to
              ensure that it doesn’t overheat and cause damage to the CPU or
              more. There are different types of cooling systems:
            </p>

            <ul>
              <li >
                <strong >Liquid cooling:</strong> a
                liquid cooling block is usually connected to the CPU and has a
                reservoir of extra coolant waiting to be used to cool down the
                CPU.
              </li>

              <li >
                <strong >Fan cooling:</strong>{" "}
                Typically when using fan cooling you would have a heatsink
                attached to the fan, and the heatsink is what gets attached to
                the CPU using thermal paste/compound, which helps dissipate the
                heat.
              </li>
            </ul>
          </span>
          <br />

          <span>
            <h3 >Motherboard</h3>

            <p>
              The motherboard holds the CPU (Central Processing Unit), RAM
              (Random Access Memory) as well as input/output devices like
              storage, keyboards, mice, etc. It also allows for easier
              communication between the parts in and out of the computer.
            </p>
          </span>
          <br />

          <span>
            <h3 >Memory (RAM)</h3>

            <p>
              Makes it easier to run multiple applications or applications that
              require more resources/power to run.
            </p>
          </span>
          <br />

          <span>
            <h3 >Storage</h3>

            <p>
              Holds your files, such as games, programs and documents. There are
              different types of storage such as HDD (Hard Disc Drive), SSD
              (Solid State Drive), SSHD (Solid State Hybrid Drive).
            </p>

            <ul>
              <li >
                <strong >
                  HDD (Hard Disc Drive):
                </strong>{" "}
                A HDD or often referred to as a hard drive is the typical
                storage that you might find in a laptop. You would also
                typically find a hard drive in a computer that would have
                multiple options to store your files.
              </li>

              <li >
                <strong >
                  SSD (Solid State Drive):
                </strong>{" "}
                Unlike a hard drive an SSD doesn’t have any moving parts and
                stores its information by using “flash memory”, which will keep
                all its data/information when there is no power supplied.
                Because of the way this storage works you get faster speeds when
                reading and writing data to the SSD.
              </li>

              <li >
                <strong >
                  SSHD (Solid State Hybrid Drive):
                </strong>{" "}
                SSHDs combines both SSDs and HDDs. You’re able to store data on
                the SSD side of the hybrid drive which people often use for
                storing their operating system. The HDD side of the hybrid drive
                is often used as a normal hard drive. Often there is a cache
                with this which will read often used blocks on the hard drive
                and store that data on the SSD portion of the hybrid drive for
                faster reading and writing.
              </li>
            </ul>
          </span>
          <br />

          <span>
            <h3 >Graphics Card</h3>

            <p>
              A graphics card is what displays graphics/information to the
              screen. It also does calculations just like the CPU but does it at
              a more efficient and faster rate in deciding on how to display
              your content.
            </p>
          </span>
          <br />

          <span>
            <h3 >Case</h3>

            <p>Houses all of the parts of a computer.</p>
          </span>
          <br />

          <span>
            <h3 >Power Supply (PSU)</h3>

            <p>
              The power supply draws power from the wall to supply your computer
              with enough power in order for it to run and operate with what
              you’re doing. It’s often a good idea to get one that’ll easily
              supply more power to the computer incase you are doing heavy work.
            </p>
          </span>
          <br />

          <span>
            <h3 >Optical Drive</h3>

            <p>
              An optical drive is what allows you to read and write to a disc.
              But because of the internet, these are quickly becoming unneeded.
            </p>
          </span>
          <br />
        </div>
      </Fragment>
    );
  }
}
export default PCParts;
