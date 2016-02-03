let common = {
    //  生成UUID
    uuid (){
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    },
    getData (){
        let data= [];
        let account = ['ubunut','root','admin','Administrator','sa'];
        let osArray = ['Windows2003','Windows2008','Windows2012','redHat','ubuntu'];
        for (let i = 1; i <= 100; i++) {
            data.push({
                id:i,
                ip:"200.210.33."+Math.floor(Math.random()*255),
                hostName:'HostName'+i,
                os:osArray[Math.floor(Math.random()*5)],
                account:account[Math.floor(Math.random()*5)],
                macAddress:this.uuid().substring(0,16),
                port:Math.floor(Math.random()*100),
            })
        };
        return data;
    }
}

export default common;