const sgMail = require('@sendgrid/mail');
const sgHelper=require('@sendgrid/helpers');

const keys=require('../config/keys');
sgMail.setApiKey(keys.sendGridKey);

class Mailer{
  constructor({subject,recipients},content){
    this.recipients= this.formatAddresses(recipients);
    this.isMultiple=true;

    if(this.recipients.length===1){
      this.recipients=this.recipients[0];
      this.isMultiple=false;
    }

    this.emails={
      to:this.recipients,
      from:'2019213@iiitdmj.ac.in',
      subject:subject,
      html:content,
      tracking_settings:{
        click_tracking:{
          enable:true,
          enable_text:true
        },
        open_tracking:{
          enable:true
        }
      },
      isMultiple:this.isMultiple
    };
  }

  formatAddresses(recipients){
    return recipients.map(({email})=>email)
  }

  async send(){
    try {
      if(!this.recipients.length){
        return null;
      }

      return await sgMail.send(this.emails);
    } catch (error) {
      console.log(error);
    }
    finally{
      return null;
    }
  }
}

module.exports=Mailer;