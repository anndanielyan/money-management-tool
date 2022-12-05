const signIn = `
        <h2 class='modal-headline'>Sign In</h2>
        <form action='#'>
          <label class='label-text' for='uname'>Username</label>
          <input
            class='input-field'
            type='text'
            placeholder='Enter Username'
            name='uname'
          />

          <label class='label-text' for='psw'>Password</label>
          <input
            class='input-field'
            type='password'
            placeholder='Enter Password'
            name='psw'
          />

          <button class='submit-btn' type='submit'>Sign In</button>
        </form>
        <button class='close-modal'>&times;</button>
`;

export { signIn };
