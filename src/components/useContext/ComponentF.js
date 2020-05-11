import React from "react";
import {
  UserContext,
  ChannelContext,
} from "D:/Survival/Web Technology/JavaScript/React/Practice/hooks/src/App.js";

/*
 * normal method to get the valuse which is passed through 'UserContext.Provider'.
 */

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Context Value. {user}, Channel Context Value. {channel}
                  </div>
                )
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
