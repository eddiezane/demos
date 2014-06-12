package main

import (
  "fmt"
  "os"
  "github.com/sendgrid/sendgrid-go"
)

func main() {
  sg := sendgrid.NewSendGridClient(os.Getenv("SENDGRID_USERNAME"), os.Getenv("SENDGRID_PASSWORD"))
  message := sendgrid.NewMail()
  message.AddTo("eddiezane@sendgrid.com")
  message.AddToName("Eddie Zaneski")
  message.AddSubject("SendGrid Testing")
  message.AddText("WIN")
  message.AddFrom("eddiezane@sendgrid.com")
  if r := sg.Send(message); r == nil {
    fmt.Println("Email sent!")
  } else {
    fmt.Println(r)
  }
}
