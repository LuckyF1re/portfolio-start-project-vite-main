import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contacts_Styles.ts";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            return;
        }

        emailjs
            .sendForm('service_ihtsp86', 'template_ih5znab', form.current, {
                publicKey: 'Hr1FLHSWTGEgkPI1t',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.currentTarget.reset()
    };



    return (
        <S.StyledContacts id={"contact"}>

            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"Name"} name={"user_name"}/>
                    <S.Field required placeholder={"Email"} name={"email"}/>
                    <S.Field required placeholder={"Subject"} name={"subject"}/>
                    <S.Field required placeholder={"Message"} as={"textarea"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>

        </S.StyledContacts>
    );
};

