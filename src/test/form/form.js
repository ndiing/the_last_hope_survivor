import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class TestForm extends MDComponent {
    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            <md-form>
                <md-layout-column>
                    <!-- email -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="email">email</label><br>
                        <input id="email" type="email" name="email" value="user@example.com" /> 
                    </md-layout-column-item>
                    
                    <!-- password -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="password">password</label><br>
                        <input id="password" type="password" name="password" value="password123" /> 
                    </md-layout-column-item>
                    
                    <!-- search -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="search">search</label><br>
                        <input id="search" type="search" name="search" value="search query" /> 
                    </md-layout-column-item>
                    
                    <!-- tel -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="tel">tel</label><br>
                        <input id="tel" type="tel" name="tel" value="08123456789" /> 
                    </md-layout-column-item>
                    
                    <!-- text -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="text">text</label><br>
                        <input id="text" type="text" name="text" value="Sample text" /> 
                    </md-layout-column-item>
                    
                    <!-- url -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="url">url</label><br>
                        <input id="url" type="url" name="url" value="https://example.com" /> 
                    </md-layout-column-item>
                    
                    <!-- number -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="number">number</label><br>
                        <input id="number" type="number" name="number" value="42" /> 
                    </md-layout-column-item>
                    
                    <!-- date -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="date">date</label><br>
                        <input id="date" type="date" name="date" value="2024-01-15" /> 
                    </md-layout-column-item>
                    
                    <!-- datetime -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="datetime-local">datetime-local</label><br>
                        <input id="datetime-local" type="datetime-local" name="datetime-local" value="2024-01-15T14:30" /> 
                    </md-layout-column-item>
                    
                    <!-- month -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="month">month</label><br>
                        <input id="month" type="month" name="month" value="2024-01" /> 
                    </md-layout-column-item>
                    
                    <!-- time -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="time">time</label><br>
                        <input id="time" type="time" name="time" value="14:30" /> 
                    </md-layout-column-item>
                    
                    <!-- week -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="week">week</label><br>
                        <input id="week" type="week" name="week" value="2024-W03" /> 
                    </md-layout-column-item>
                    
                    <!-- color -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="color">color</label><br>
                        <input id="color" type="color" name="color" value="#ff5733" /> 
                    </md-layout-column-item>
                    
                    <!-- file -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="file">file</label><br>
                        <input id="file" type="file" name="file" /> 
                    </md-layout-column-item>
                    
                    <!-- range -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="range">range</label><br>
                        <input id="range" type="range" name="range" min="0" max="100" value="75" /> 
                    </md-layout-column-item>
                    
                    <!-- checkbox -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        checkbox<br>
                        <label for="checkbox0"><input id="checkbox0" type="checkbox" name="checkbox" value="checkbox0"  /> Option 1</label><br>
                        <label for="checkbox1"><input id="checkbox1" type="checkbox" name="checkbox" value="checkbox1"  /> Option 2</label><br>
                        <label for="checkbox2"><input id="checkbox2" type="checkbox" name="checkbox" value="checkbox2" checked /> Option 3</label>
                    </md-layout-column-item>
                    
                    <!-- radio -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        radio<br>
                        <label for="radio0"><input id="radio0" type="radio" name="radio" value="radio0" checked /> Radio 0</label><br>
                        <label for="radio1"><input id="radio1" type="radio" name="radio" value="radio1" /> Radio 1</label>
                    </md-layout-column-item>
                    
                    <!-- datalist -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="datalist">datalist</label><br>
                        <input id="datalist" type="text" name="datalist" list="list" value="option1" /> 
                        <datalist id="list">
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                        </datalist>
                    </md-layout-column-item>
                    
                    <!-- select -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="select">select</label><br>
                        <select id="select" name="select">
                            <option value="option1" selected>option1</option>
                            <option value="option2">option2</option>
                        </select>
                    </md-layout-column-item>
                    
                    <!-- select2 -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="select2">select2</label><br>
                        <select id="select2" name="select2">
                            <optgroup label="optgroup1">
                                <option value="option1" selected>option1</option>
                                <option value="option2">option2</option>
                            </optgroup>
                            <optgroup label="optgroup2">
                                <option value="option1">option1</option>
                                <option value="option2">option2</option>
                            </optgroup>
                        </select>
                    </md-layout-column-item>
                    
                    <!-- textarea -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <label for="textarea">textarea</label><br>
                        <textarea id="textarea" name="textarea">Sample text content for testing</textarea>
                    </md-layout-column-item>
                    
                    <!-- meter -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <meter id="meter" min="0" max="100" value="75"></meter>
                    </md-layout-column-item>
                    
                    <!-- progress -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <progress id="progress" max="100" value="60"></progress>
                    </md-layout-column-item>
                    
                    <!-- image -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <input id="image" type="image" src="" alt="submit" /> 
                    </md-layout-column-item>
                    
                    <!-- button -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <input id="button" type="button" value="Click Me" /> 
                    </md-layout-column-item>
                    
                    <!-- reset -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <input id="reset" type="reset" value="Reset Form" /> 
                    </md-layout-column-item>
                    
                    <!-- submit -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <input id="submit" type="submit" value="Submit Form" /> 
                    </md-layout-column-item>
                    
                    <!-- button2 -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <button id="button2" type="button">Custom Button</button> 
                    </md-layout-column-item>
                    
                    <!-- reset2 -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <button id="reset2" type="reset">Reset Form</button> 
                    </md-layout-column-item>
                    
                    <!-- submit2 -->
                    <md-layout-column-item expanded="4" medium="8" compact="4">
                        <button id="submit2" type="submit">Submit Form</button> 
                    </md-layout-column-item>
                </md-layout-column>
            </md-form>
        `;
    }
}

customElements.define("test-form", TestForm);

export default document.createElement("test-form");
