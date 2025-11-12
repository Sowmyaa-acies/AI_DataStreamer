// CSS module declaration moved to src/global.d.ts

import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// @ts-ignore: SCSS module declaration may be missing in the type system (declare '*.module.scss' in src/global.d.ts to remove this)
import styles from './AiDataStreamerWebPart.module.scss';

export interface IAiDataStreamerWebPartProps {
  description: string;
}

export default class AiDataStreamerWebPart extends BaseClientSideWebPart<IAiDataStreamerWebPartProps> {

  public render(): void {

    this.domElement.innerHTML = `
      <section class="${styles.aiDataStreamer}">
        <h2 class="${styles.h2}">Heading Comes Here</h2>
        <p class="${styles.subtitle}">sub heading comes here</p>

        <div class="${styles.cardsSection}">
          <div class="${styles.card}">
            <p class="${styles.cardText}">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.Y Text Of The Printing And Typesetting Indy Text Of The Printing And Typesetting Ind ...
            </p>
            <div class="${styles.meta}">
              <span class="${styles.author}">Jacob</span>
              <span class="${styles.separator}"></span>
              <span class="${styles.date}">10 Nov,2025</span>
            </div>
          </div>

          <div class="${styles.card}">
            <p class="${styles.cardText}">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.Y Text Of The Printing And Typesetting Indy Text Of The Printing And Typesettin
            </p>
          </div>

           <div class="${styles.card}">
            <p class="${styles.cardText}">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.Y Text Of The Printing And Typesetting Indy Text Of The Printing And Typesettin
            </p>
          </div>

           <div class="${styles.card}">
            <p class="${styles.cardText}">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.Y Text Of The Printing And Typesetting Indy Text Of The Printing And Typesettin
            </p>
          </div>

           <div class="${styles.card}">
            <p class="${styles.cardText}">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.Y Text Of The Printing And Typesetting Indy Text Of The Printing And Typesettin
            </p>
          </div>
          </div>
          </div>

           <div class="${styles.rightLine}"></div>
           <div class="${styles.lineTrack}"></div>
           <div class="${styles.lineThumb}"></div>
          
          
        </div>
        </div>
        

        
      </section>
    `;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
