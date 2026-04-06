import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DemoForm extends MDComponent {
    render() {
        /* prettier-ignore */
        return html`
            <md-form>            
                <input name="hidden" type="hidden">
                
                <fieldset>
                    <legend>legend0</legend>
                    
                    <label>text</label><br><input required name="text" type="text"><br>
                    <label>search</label><br><input name="search" type="search">
                </fieldset><br>

                <fieldset>
                    <legend>legend1</legend>
                    
                    <label>number</label><br><input name="number" type="number"><br>
                    <label>tel</label><br><input name="tel" type="tel">
                </fieldset><br>

                <fieldset>
                    <legend>legend2</legend>
                    
                    <label>email</label><br><input name="email" type="email"><br>
                    <label>password</label><br><input name="password" type="password"><br>
                    <label>url</label><br><input name="url" type="url">
                </fieldset><br>

                <fieldset>
                    <legend>legend4</legend>
                    
                    <label>date</label><br><input name="date" type="date"><br>
                    <label>datetime-local</label><br><input name="datetime-local" type="datetime-local"><br>
                    <label>month</label><br><input name="month" type="month"><br>
                    <label>time</label><br><input name="time" type="time"><br>
                    <label>week</label><br><input name="week" type="week">
                </fieldset><br>

                <fieldset>
                    <legend>legend3</legend>
                    
                    <label>datalist</label><br><input datalist="text" type="text" list="datalist"><datalist id="datalist"><option value="1">Satu</option><option value="2">Dua</option><option value="3">Tiga</option><option value="4">Empat</option><option value="5">Lima</option></datalist><br>
                    
                    <label>select</label><br><select name="select"><option value="1">Satu</option><option value="2">Dua</option><option value="3">Tiga</option><option value="4">Empat</option><option value="5">Lima</option></select><br>
                    <label>select</label><br><select name="optgroup"><optgroup label="optgroup0"><option value="1">Satu</option><option value="2">Dua</option><option value="3">Tiga</option><option value="4">Empat</option><option value="5">Lima</option></optgroup><optgroup label="optgroup1"><option value="1">Satu</option><option value="2">Dua</option><option value="3">Tiga</option><option value="4">Empat</option><option value="5">Lima</option></optgroup></select><br>
                    
                    <label>select</label><br><select multiple name="select-multiple"><option value="1">Satu</option><option value="2">Dua</option><option value="3">Tiga</option><option value="4">Empat</option><option value="5">Lima</option></select><br>
                    <label>select</label><br><select multiple name="optgroup-multiple"><optgroup label="optgroup0"><option value="1">Satu</option><option value="2">Dua</option><option value="3">Tiga</option><option value="4">Empat</option><option value="5">Lima</option></optgroup><optgroup label="optgroup1"><option value="1">Satu</option><option value="2">Dua</option><option value="3">Tiga</option><option value="4">Empat</option><option value="5">Lima</option></optgroup></select><br>
                    
                    <label>textarea</label><br><textarea name="textarea"></textarea>
                </fieldset><br>

                <fieldset>
                    <legend>legend5</legend>

                    <label><input name="checkbox" type="checkbox" value="checkbox0"> checkbox0</label><br>
                    <label><input name="checkbox" type="checkbox" value="checkbox1"> checkbox1</label><br>
                    <label><input name="checkbox" type="checkbox" value="checkbox2"> checkbox2</label><br>
                    <br>
                    
                    <label><input name="radio" type="radio" value="radio0"> radio0</label><br>
                    <label><input name="radio" type="radio" value="radio1"> radio1</label><br>
                    <label><input name="radio" type="radio" value="radio2"> radio2</label>
                </fieldset><br>

                <fieldset>
                    <legend>legend6</legend>
                    
                    <label>color</label><br><input name="color" type="color"><br>
                    <label>file</label><br><input name="file" type="file"><br>
                    <label>range</label><br><input name="range" type="range">
                </fieldset><br>

                <meter></meter><br><br>
                <progress></progress><br><br>

                <md-button type="button" label="Button"></md-button>
                <!-- <md-button type="image" label="Image"></md-button> -->
                <md-button type="reset" label="Reset"></md-button>
                <md-button type="submit" label="Submit"></md-button>
                <!-- <br><br> -->

                <!-- <input type="button" value="button"> -->
                <!-- <input type="image" value="image"> -->
                <!-- <input type="reset" value="reset"> -->
                <!-- <input type="submit" value="submit"> -->
            </md-form>
        `
    }
}

customElements.define("demo-form", DemoForm);

export default document.createElement("demo-form");
