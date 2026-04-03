import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка письма с формы обратной связи на почту автора."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    email = body.get("email", "").strip()
    message = body.get("message", "").strip()

    if not name or not email or not message:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "missing_fields"}),
        }

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    sender = "gcesnokov549@gmail.com"
    recipient = "gcesnokov549@gmail.com"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новое сообщение с сайта от {name}"
    msg["From"] = sender
    msg["To"] = recipient

    html = f"""
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f5f0; border: 1px solid #e0d5c5;">
        <h2 style="font-size: 22px; font-weight: 300; color: #1a1208; margin-bottom: 24px; border-bottom: 1px solid #c9a84c; padding-bottom: 12px;">
            Новое сообщение с сайта
        </h2>
        <p style="font-size: 14px; color: #666; margin-bottom: 8px;"><strong>Имя:</strong> {name}</p>
        <p style="font-size: 14px; color: #666; margin-bottom: 24px;"><strong>Email:</strong> {email}</p>
        <div style="background: #fff; padding: 20px; border-left: 3px solid #c9a84c;">
            <p style="font-size: 16px; color: #2a1f0e; line-height: 1.7; margin: 0;">{message}</p>
        </div>
        <p style="font-size: 12px; color: #999; margin-top: 24px;">Отправлено с сайта Германа Чеснокова</p>
    </div>
    """

    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"ok": True}),
    }