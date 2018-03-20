import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import classes from './Summary.scss';

const summary = () => (
  <Container text>
    <Segment textAlign="center" className={classes.Summary}>
      <Header as="h2">
        BENEFITS & EXAMPLES OF MICROSERVICES ARCHITECTURE IMPLEMENTATION
      </Header>
      <Header sub className={classes.Sub}>
        04/18/2017&nbsp;&nbsp;|&nbsp;&nbsp; IN SOFTWARE
        ARCHITECTURE&nbsp;&nbsp;|&nbsp;&nbsp; by EKATERINA NOVOSELTSEVA
      </Header>
      <p>
        As you have noticed this quarter we are talking about trends and
        buzzwords so that you know what to focus on this year. Today we will
        discuss microservices architecture; it’s essence, benefits and
        successful case studies.
      </p>

      <Header as="h3">
        What is so good about microservices architecture ?
      </Header>
      <p>
        When we talk about microservices architecture, we talk about an
        architectural style, an approach to software development in which a
        large application is built as a suite of modular services; small,
        independently versioned, and scalable customer-focused services with
        specific business goals, which communicate with each other over standard
        protocols with well-defined interfaces. As they are independently
        deployable and scalable, each service also provides a firm module
        boundary, even allowing for different services to be written in
        different programming languages and can also be managed by different
        teams.
      </p>

      <p>
        Microservices architecture is a way of breaking large software projects
        into smaller, independent, and loosely coupled modules. Individual
        modules are responsible for highly defined and discrete tasks and
        communicate with other modules through simple, universally accessible
        APIs. It is a distinctive method of developing software systems that has
        grown in popularity in recent years. Thanks to its scalability, this
        architectural method is considered particularly ideal when you have to
        enable support for a range of platforms and devices, for example web,
        mobile, Internet of Things, wearables, etc. or simply when you’re not
        sure what kind of devices you’ll need to support in a cloudy future.
      </p>

      <p>
        The main idea behind microservices architecture is that some types of
        applications become easier to build and maintain when they are broken
        down into smaller, composable pieces which work together. In other
        words, each component is developed separately, and the application is
        then simply the sum of its constituent components. In a microservices
        architecture, each service runs a unique process and usually manages its
        own database. This not only provides development teams with a more
        decentralized approach to building software, it also allows each service
        to be deployed, rebuilt, redeployed and managed independently. The
        philosophy of the microservices architecture : “Do one thing and do it
        well”. Services might run within the same process, but they should be
        independently deployable and easy to replace. They can be implemented
        using different programming languages, databases, and software
        environment. The services are small, fine-grained to perform a single
        function. They embrace automation of testing and deployment, continuous
        delivery software development process, failure and faults, similar to
        anti-fragile systems. Each service is elastic, resilient, composable,
        minimal, and complete.
      </p>
      <p>
        Also, probably you have heart about Docker if you
        are interested in microservices architecture. And you have heart that
        Docker or other container technologies is kind of enabler of a
        microservice architecture. Containers are designed to be pared down to
        the minimal viable pieces needed to run whatever the one thing the
        container is designed to do, rather than packing multiple functions into
        the same machine. The ease of development that Docker provides help make
        possible rapid development and testing. Using containers and
        microservices together enhances cloud capabilities. Microservices is
        scalable and reusable, while containers supply efficient resources. Both
        microservices and containers can work independently, but it has become
        clear that merging them has improved runtime frequency, cloud-hosting
        policies and cloud tools.
      </p>
      <Header as="h3">
        Microservices architecture benefits
      </Header>
      <p>
        Software built as microservices can be broken down into multiple component
        services. So that each of these services can be deployed and then
        redeployed independently without compromising the integrity of an
        application. That means that microservice architecture gives developers
        the freedom to independently develop and deploy services. Better fault
        isolation. If one microservice fails, the other will continue to work
        Code for different services can be written in different languages Easy
        integration and automatic deployment; using open-source continuous
        integration tools such as Jenkins, etc. The microservice architecture
        enables continuous delivery Easy to understand since they represent the
        small piece of functionality and easy to modify for developers, thus can
        help a new team member become productive quickly The code is organized
        around business capabilities Scalability and reusability, as well as
        efficiency. Easy to scale and integrate with third-party services
        Components can be spread around multiple servers or even multiple data
        centers Work very well with containers, such as Docker Complement cloud
        activities Microservices simplifies security monitoring because the
        various parts of an app are isolated. A security problem could happen in
        one section without affecting other areas of the project Increase the
        autonomy of individual development teams within an organization, as
        ideas can be implemented and deployed without having to coordinate with
        a wider IT delivery function.

      </p>
      <Header as="h3">
        Successful case studies & examples of microservices architecture implementation
      </Header>
      <p>
        Netflix, eBay, Amazon, the UK
        Government Digital Service, Twitter, PayPal, The Guardian, and many
        other large-scale websites and applications have all evolved from
        monolithic to microservices architecture. Let’s look at some of the
        success stories to see the result.
      </p>
    </Segment>
  </Container>
);

export default summary;
