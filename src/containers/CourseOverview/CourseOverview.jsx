import React, { useState } from "react";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import "./CourseOverview.scss";
import MenuBar from "../../components/MenuBar/MenuBar";

// path: /courses/:courseId

const CourseOverview = () => {
  const [category, setCategory] = useState("lessons");

  const capitalisedNames = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.innerText.toLowerCase());
  };

  return (
    <div className="course-overview">
      <div className="course-overview__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          debitis quae maiores quam, suscipit dolorum natus sunt quisquam, quos
          quibusdam ratione, totam ut. Vero aperiam consectetur in neque soluta
          libero. Soluta, nisi similique possimus rerum pariatur sunt ipsum ea
          asperiores, recusandae error vel excepturi placeat culpa sint quod
          corrupti laboriosam blanditiis, doloribus libero quo neque voluptates
          dignissimos reprehenderit dicta. Magni! Tempore facere debitis veniam,
          eligendi excepturi officia quo facilis sunt voluptatem aspernatur
          magni. In necessitatibus consectetur amet dolores tempore a,
          consequatur cum? Tempore, commodi eos similique repudiandae quasi
          inventore quis? Assumenda incidunt voluptate reiciendis distinctio
          nisi doloremque. Nulla officiis ullam suscipit eaque atque dicta
          blanditiis maiores illo rem doloremque iste voluptatem assumenda
          quisquam ipsa quaerat, quas excepturi quasi reiciendis incidunt.
          Saepe, molestiae natus fugit maxime, eligendi repellendus modi tempora
          placeat reiciendis voluptate temporibus similique eum? Sint, illo at
          optio vel quo consectetur sed voluptatem tempore, nam iste fugiat
          voluptates labore. Nobis quo, voluptates placeat a, vitae deleniti
          alias consequatur asperiores accusamus modi ipsam commodi ipsa
          perspiciatis iste eum ad? Dolore, dicta eaque debitis voluptatum ipsum
          nemo quam dolores quo beatae! Voluptatum qui, voluptas eligendi atque
          quasi voluptates adipisci, magnam perferendis doloribus reprehenderit
          minima, distinctio saepe est. Sunt delectus doloremque quos amet quam
          quas, ullam iste doloribus, accusamus corporis consequatur rem! Natus
          tempore modi nemo quam itaque expedita, aut voluptates necessitatibus
          perspiciatis aliquid sunt impedit maiores quibusdam magni ullam
          tempora unde. Voluptatem laudantium atque, assumenda ducimus eaque
          eveniet sapiente corrupti fugiat? Praesentium corrupti a ex fuga animi
          qui, doloremque dolor illum earum veniam esse odit sed id maxime.
          Soluta facere at provident mollitia totam, doloribus facilis sequi ab,
          autem labore odio? Minima unde obcaecati eveniet atque veritatis
          facere ex tenetur minus odit aut? Mollitia quisquam cumque excepturi
          temporibus fugit! Asperiores qui cupiditate cumque perspiciatis eius
          vitae mollitia eveniet, praesentium laudantium tenetur. Tenetur, iste
          cum neque eos beatae sapiente minima officia obcaecati nostrum id
          dolore unde fuga cumque temporibus autem impedit dolorem. Aliquam
          dolore ullam magnam sunt animi, libero neque possimus sapiente. Magnam
          doloribus optio sunt, eaque labore voluptas soluta vitae ex unde enim
          est tenetur saepe nulla blanditiis excepturi sint necessitatibus.
          Sapiente adipisci quia molestias beatae ex voluptatibus explicabo
          dolorem cumque. Quo, quidem. Adipisci eum, quae placeat dolore nulla
          est molestias nisi rerum accusantium, porro amet magni. Laboriosam
          odit distinctio dolorum quasi, voluptatem dolorem architecto optio,
          nihil dignissimos quibusdam facilis. A! Voluptatem sint itaque
          blanditiis, suscipit voluptatum totam eos iusto non sequi nobis
          consequatur natus! Quibusdam consequatur recusandae in, nobis
          molestias doloribus quas. Eius, illo. Error ullam labore illum. Dicta,
          explicabo. Minus sequi dolorum nobis quae illo fugiat odio nemo quod!
          Eum eos itaque aliquid, veritatis sit rerum ipsam quia voluptates
          pariatur magni commodi dolores quasi in consectetur perspiciatis.
          Accusamus, doloribus. Harum dignissimos iure odit asperiores dolores
          laboriosam ea, magni corrupti nostrum quaerat, sed at quibusdam ut?
          Temporibus, molestiae eius quae ex aliquam cumque quam. Omnis numquam
          deleniti nesciunt quisquam quae! Sequi minima sit fuga, minus sed
          laborum eius rerum maxime illo, repellendus error odit perspiciatis
          inventore magnam odio natus asperiores eligendi dicta nam. Possimus
          fugit neque itaque quaerat facere eveniet! Aliquam temporibus debitis
          sint nisi recusandae. Eum labore ratione distinctio neque quis rerum
          aliquam sequi ab, quaerat hic deleniti inventore nam. Alias saepe
          dolorem aut eum iusto reiciendis dolor expedita. Ab reiciendis quaerat
          mollitia eos facilis minima ratione ducimus reprehenderit distinctio
          alias in adipisci, recusandae sunt architecto deserunt magni,
          perspiciatis nulla quas repellendus quam. Itaque consequuntur dolorum
          repudiandae ab. Labore! Cumque architecto vitae laborum distinctio
          omnis quae quas ratione numquam fuga atque illum minima sequi ipsum
          est sed, nemo cupiditate tempora asperiores consectetur? Quam, vel
          nostrum iure eum vitae aliquid.
        </p>
        <div className="course-overview__filters">
          <MenuBar
            link1="Lessons"
            link2="Challenges"
            link3="Additional Info"
            onClickLink={handleCategoryChange}
          />
        </div>

        <div
          data-testid="course-overview-list"
          className="course-overview__list"
        >
          <CourseOverviewList
            title={capitalisedNames(category)}
            category={category}
          />
        </div>
      </div>
      <p>
        {" "}
        inventore quis? Assumenda incidunt voluptate reiciendis distinctio nisi
        doloremque. Nulla officiis ullam suscipit eaque atque dicta blanditiis
        maiores illo rem doloremque iste voluptatem assumenda quisquam ipsa
        quaerat, quas excepturi quasi reiciendis incidunt. Saepe, molestiae
        natus fugit maxime, eligendi repellendus modi tempora placeat reiciendis
        voluptate temporibus similique eum? Sint, illo at optio vel quo
        consectetur sed voluptatem tempore, nam iste fugiat voluptates labore.
        Nobis quo, voluptates placeat a, vitae deleniti alias consequatur
        asperiores accusamus modi ipsam commodi ipsa perspiciatis iste eum ad?
        Dolore, dicta eaque debitis voluptatum ipsum nemo quam dolores quo
        beatae! Voluptatum qui, voluptas eligendi atque quasi voluptates
        adipisci, magnam perferendis doloribus reprehenderit minima, distinctio
        saepe est. Sunt delectus doloremque quos amet quam quas, ullam iste
        doloribus, accusamus corporis consequatur rem! Natus tempore modi nemo
        quam itaque expedita, aut voluptates necessitatibus perspiciatis aliquid
        sunt impedit maiores quibusdam magni ullam tempora unde. Voluptatem
        laudantium atque, assumenda ducimus eaque eveniet sapiente corrupti
        fugiat? Praesentium corrupti a ex fuga animi qui, doloremque dolor illum
        earum veniam esse odit sed id maxime. Soluta facere at provident
        mollitia totam, doloribus facilis sequi ab, autem labore odio? Minima
        unde obcaecati eveniet atque veritatis facere ex tenetur minus odit aut?
        Mollitia quisquam cumque excepturi temporibus fugit! Asperiores qui
        cupiditate cumque perspiciatis eius vitae mollitia eveniet, praesentium
        laudantium tenetur. Tenetur, iste cum neque eos beatae sapiente minima
        officia obcaecati nostrum id dolore unde fuga cumque temporibus autem
        impedit dolorem. Aliquam dolore ullam magnam sunt animi, libero neque
        possimus sapiente. Magnam doloribus optio sunt, eaque labore voluptas
        soluta vitae ex unde enim est tenetur saepe nulla blanditiis excepturi
        sint necessitatibus. Sapiente adipisci quia molestias beatae ex
        voluptatibus explicabo dolorem cumque. Quo, quidem. Adipisci eum, quae
        placeat dolore nulla est molestias nisi rerum accusantium, porro amet
        magni. Laboriosam odit distinctio dolorum quasi, voluptatem dolorem
        architecto optio, nihil dignissimos quibusdam facilis. A! Voluptatem
        sint itaque blanditiis, suscipit voluptatum totam eos iusto non sequi
        nobis consequatur natus! Quibusdam consequatur recusandae in, nobis
        molestias doloribus quas. Eius, illo. Error ullam labore illum. Dicta,
        explicabo. Minus sequi dolorum nobis quae illo fugiat odio nemo quod!
        Eum eos itaque aliquid, veritatis sit rerum ipsam quia voluptates
        pariatur magni commodi dolores quasi in consectetur perspiciatis.
        Accusamus, doloribus. Harum dignissimos iure odit asperiores dolores
        laboriosam ea, magni corrupti nostrum quaerat, sed at quibusdam ut?
        Temporibus, molestiae eius quae ex aliquam cumque quam. Omnis numquam
        deleniti nesciunt quisquam quae! Sequi minima sit fuga, minus sed
        laborum eius rerum maxime illo, repellendus error odit perspiciatis
        inventore magnam odio natus asperiores eligendi dicta nam. Possimus
        fugit neque itaque quaerat facere eveniet! Aliquam temporibus debitis
        sint nisi recusandae. Eum labore ratione distinctio neque quis rerum
        aliquam sequi ab, quaerat hic deleniti inventore nam. Alias saepe
        dolorem aut eum iusto reiciendis dolor expedita. Ab reiciendis quaerat
        mollitia eos facilis minima ratione ducimus reprehenderit distinctio
        alias in adipisci, recusandae sunt architecto deserunt magni,
        perspiciatis nulla quas repellendus quam. Itaque consequuntur dolorum
        repudiandae ab. Labore! Cumque architecto vitae laborum distinctio omnis
        quae quas ratione numquam fuga atque illum minima sequi ipsum est sed,
        nemo cupiditate tempora asperiores consectetur? Quam, vel nostrum iure
        eum vitae aliquid.
      </p>
    </div>
  );
};

export default CourseOverview;
